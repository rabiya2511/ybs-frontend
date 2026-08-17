import { createContext, useCallback, useEffect, useState, type ReactNode } from 'react';
import { api, clearStoredTokens, getStoredTokens, setStoredTokens } from '@/services/api';
import type { AuthResponse, LoginPayload, RegisterPayload, User } from '@/types/auth';

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ---------------------------------------------------------------------------
// TEMPORARY DEV BYPASS — remove once a real DIOS backend is connected.
// Lets the app be used/demoed without a live auth server. Enabled only when
// VITE_DEV_MOCK_AUTH=true is set locally (see .env), never by default.
// ---------------------------------------------------------------------------
const MOCK_AUTH_ENABLED = import.meta.env.VITE_DEV_MOCK_AUTH === 'true';
const MOCK_USER: User = {
  id: 'dev-user',
  name: 'Rajesh Kumar',
  email: 'rajesh@techventure.in',
  membership: 'Gold Member',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (MOCK_AUTH_ENABLED) {
      setUser(MOCK_USER);
      setIsLoading(false);
      return;
    }

    const tokens = getStoredTokens();
    if (!tokens) {
      setIsLoading(false);
      return;
    }

    api
      .get<User>('/auth/me')
      .then(({ data }) => setUser(data))
      .catch(() => {
        clearStoredTokens();
        setUser(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const login = useCallback(async (payload: LoginPayload) => {
    if (MOCK_AUTH_ENABLED) {
      setUser(MOCK_USER);
      return;
    }
    const { data } = await api.post<AuthResponse>('/auth/login', payload);
    setStoredTokens(data.tokens);
    setUser(data.user);
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    if (MOCK_AUTH_ENABLED) {
      setUser(MOCK_USER);
      return;
    }
    const { data } = await api.post<AuthResponse>('/auth/register', payload);
    setStoredTokens(data.tokens);
    setUser(data.user);
  }, []);

  const logout = useCallback(() => {
    clearStoredTokens();
    setUser(MOCK_AUTH_ENABLED ? MOCK_USER : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}