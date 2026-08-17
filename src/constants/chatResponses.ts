import type { QuickReply } from '@/types/chat';

/** Keyword-matched canned responses. Swap for a real AI backend in a later phase. */
const AI_RESPONSES: Record<string, string> = {
  registrationDocs: `For Pvt Ltd registration you'll need:\n\n📄 Each Director: PAN card, Aadhaar, passport photo, address proof (bank statement or utility bill ≤2 months)\n\n🏠 Registered Office: Rent agreement + NOC from owner, or ownership proof + utility bill\n\n✍️ We draft MOA, AOA, and all MCA forms — just upload your documents in the dashboard!`,
  timeline: `Typical company registration timeline:\n\n⚡ Day 1 — Order confirmed, CA assigned\n📋 Day 1–2 — Document collection & verification\n✅ Day 2–3 — Name availability & reservation\n📝 Day 3–5 — MCA SPICe+ form filing\n🏛️ Day 5–8 — MCA processing (govt dependent)\n🎉 Day 8–10 — Certificate of Incorporation\n\nGrowth package also includes GST + PAN (3–5 more days).`,
  orderStatus: `📍 Your Current Orders:\n\n🔷 TechVenture Pvt Ltd Registration · 72% done\nIn Progress: Certificate of Incorporation (Expected Mar 18)\nCA: Ananya Sharma · Est. completion Mar 22\n\n🎨 Brand Identity Design · 90% done\nStatus: In Review — awaiting your approval\n\n👥 HR & Payroll Setup · 10% done\nStatus: Provider assigned, starts Monday`,
  gst: `GST Registration:\n\n1️⃣ Mandatory if turnover > ₹20L (services) or ₹40L (goods)\n\n2️⃣ Documents: PAN, Aadhaar, registration certificate, bank statement, address proof\n\n3️⃣ Process: GST portal application → verification → GSTIN issued in 7–10 days\n\n💡 GST registration is included free with our Growth & Enterprise packages!`,
  iso: `ISO 9001 Certification:\n\n🎯 International standard for quality management systems\n\n✅ Benefits: Customer trust, process improvement, global market access, required for govt tenders\n\n📋 Process: Gap analysis → Documentation → Implementation → Internal audit → Certification audit\n\n⏱ Timeline: 3–6 months · Starting at ₹18,999 all-inclusive`,
  fssai: `FSSAI License:\n\n🍽️ Required for: Restaurants, cloud kitchens, packaged food, catering, food imports\n\n📋 Types:\n• Basic: Turnover < ₹12L → ₹100/year\n• State License: ₹12L–₹20Cr → ₹2,000–5,000/year\n• Central License: > ₹20Cr → ₹7,500/year\n\n⏱ Processing: 7–30 days · Our service at ₹2,499 handles everything!`,
  hr: `HR & Payroll Compliance in India:\n\n👥 Mandatory Registrations: PF (>20 employees), ESI (>10 employees), PT (state-dependent)\n\n📋 Monthly Compliances: PF challan, ESI challan, payroll processing, pay slips\n\n📅 Annual: Form 16, PF annual return, labour welfare fund\n\n💡 Our HR & Payroll service at ₹3,499/mo handles all of this end-to-end!`,
  trademark: `Trademark Registration:\n\n🛡️ Protects your brand name, logo, and tagline\n\n📋 Process:\n1. Trademark search (availability check)\n2. Application filing on IP India portal\n3. Examination by TM office (~12–18 months)\n4. Publication in Trade Marks Journal\n5. Certificate issued if no opposition\n\n💰 Our package at ₹6,999 includes search + filing + follow-up for 1 class.`,
  default: `Great question! Here's what I can help you with:\n\n• Service & package details (registration, branding, tech, finance)\n• Compliance requirements (GST, TDS, ROC, PF, ESI)\n• Order status & project updates\n• Document checklists\n• Timeline & cost estimates\n\nFeel free to ask anything specific about your startup journey! 😊`,
};

export const QUICK_REPLIES: QuickReply[] = [
  { id: 'docs', label: '📋 Registration docs', prompt: 'What documents do I need for Pvt Ltd registration?' },
  { id: 'timeline', label: '⏱ Timeline', prompt: 'How long does company registration take?' },
  { id: 'status', label: '📍 Order status', prompt: 'What is the status of my current order?' },
  { id: 'gst', label: '📊 GST help', prompt: 'Explain GST registration process' },
  { id: 'iso', label: '🏅 ISO info', prompt: 'What is ISO 9001 certification?' },
  { id: 'fssai', label: '🍽️ FSSAI guide', prompt: 'How does FSSAI license work?' },
  { id: 'hr', label: '👥 HR compliance', prompt: 'What is HR and Payroll compliance in India?' },
  { id: 'trademark', label: '🛡️ Trademark', prompt: 'Tell me about trademark registration' },
];

/** Keyword-matches a user message to a canned response. Swap for a real AI call later. */
export function getChatReply(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('document') || m.includes('need for')) return AI_RESPONSES.registrationDocs;
  if (m.includes('long') || m.includes('timeline') || m.includes('time')) return AI_RESPONSES.timeline;
  if (m.includes('status') || m.includes('order') || m.includes('current')) return AI_RESPONSES.orderStatus;
  if (m.includes('gst')) return AI_RESPONSES.gst;
  if (m.includes('iso')) return AI_RESPONSES.iso;
  if (m.includes('fssai') || m.includes('food')) return AI_RESPONSES.fssai;
  if (m.includes('hr') || m.includes('payroll')) return AI_RESPONSES.hr;
  if (m.includes('trademark') || m.includes('brand protect')) return AI_RESPONSES.trademark;
  return AI_RESPONSES.default;
}