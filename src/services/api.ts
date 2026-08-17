import axios, { type InternalAxiosRequestConfig } from 'axios';
import type { AuthTokens } from '@/types/auth';

const ACCESS_TOKEN_KEY = 'dios-access-token';
const REFRESH_TOKEN_KEY = 'dios-refresh-token';

export function getStoredTokens(): AuthTokens | null {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (!accessToken || !refreshToken) return null;
  return { accessToken, refreshToken };
}

export function setStoredTokens(tokens: AuthTokens): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
}

export function clearStoredTokens(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

// Attach the access token to every outgoing request, if one exists.
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const tokens = getStoredTokens();
  if (tokens?.accessToken) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
});

let isRefreshing = false;
let refreshQueue: Array<() => void> = [];

// On a 401, attempt a single token refresh and retry the original request.
// Concurrent 401s while a refresh is already in flight queue up and retry
// together once the new token is available, rather than firing N parallel
// refresh calls.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    const tokens = getStoredTokens();
    if (!tokens?.refreshToken) {
      clearStoredTokens();
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve) => {
        refreshQueue.push(() => resolve(api(originalRequest)));
      });
    }

    isRefreshing = true;
    try {
      const { data } = await axios.post<AuthTokens>(
        `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
        { refreshToken: tokens.refreshToken },
      );
      setStoredTokens(data);
      refreshQueue.forEach((resolve) => resolve());
      refreshQueue = [];
      return api(originalRequest);
    } catch (refreshError) {
      clearStoredTokens();
      refreshQueue = [];
      window.location.href = '/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

/** Centralized, user-facing error message — never expose raw backend stack traces (Section 29). */
export function getErrorMessage(error: unknown, fallback = 'Something went wrong. Please try again.'): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? fallback;
  }
  return fallback;
}