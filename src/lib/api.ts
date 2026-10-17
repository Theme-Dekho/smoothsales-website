const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function post<T>(endpoint: string, data: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    const message = json?.message || 'Something went wrong';
    throw new Error(message);
  }

  return json as T;
}

export interface LeadPayload {
  full_name: string;
  phone: string;
  email?: string;
  vertical?: string;
  team_size?: string;
  notes?: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  volume?: string;
  message?: string;
}

export interface DemoRequestPayload {
  full_name: string;
  phone: string;
  email?: string;
  vertical?: string;
  team_size?: string;
}

export interface PartnerApplicationPayload {
  full_name: string;
  email: string;
  phone: string;
  company_name?: string;
  website_url?: string;
  partner_track: string;
  expected_clients?: string;
  selected_verticals?: string[];
  notes?: string;
}

export interface SalesAgentApplicationPayload {
  full_name: string;
  phone: string;
  email?: string;
  city?: string;
  experience?: string;
  notes?: string;
}

export interface WhiteLabelApplicationPayload {
  full_name: string;
  phone: string;
  email?: string;
  city?: string;
  experience?: string;
  notes?: string;
}

export const api = {
  submitLead: (data: LeadPayload) =>
    post<{ success: boolean; lead_ref: string }>('/leads', data),

  submitContact: (data: ContactPayload) =>
    post<{ success: boolean }>('/contact', data),

  submitDemoRequest: (data: DemoRequestPayload) =>
    post<{ success: boolean }>('/demo-requests', data),

  submitPartnerApplication: (data: PartnerApplicationPayload) =>
    post<{ success: boolean }>('/partner-applications', data),

  submitSalesAgentApplication: (data: SalesAgentApplicationPayload) =>
    post<{ success: boolean }>('/sales-agent-applications', data),

  submitWhiteLabelApplication: (data: WhiteLabelApplicationPayload) =>
    post<{ success: boolean }>('/sales-agent-applications', data),
};
