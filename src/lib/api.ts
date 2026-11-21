const CRM_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL ||
  'https://crm.smoothsales.in/api/webhooks/leads/website/wk_smoothsales_prod_lead_capture_2026';

async function postLeadToCRM(data: Record<string, unknown>): Promise<{ success: boolean; lead_ref: string }> {
  try {
    const res = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'WEBSITE',
        website_domain: typeof window !== 'undefined' ? window.location.hostname : 'smoothsales.ai',
        submitted_url: typeof window !== 'undefined' ? window.location.href : undefined,
        submitted_at: new Date().toISOString(),
      }),
    });

    const json = await res.json().catch(() => ({}));

    if (res.ok || res.status === 202) {
      return { success: true, lead_ref: json?.eventId || json?.lead_ref || 'ok' };
    }

    const message = json?.message || 'Something went wrong while submitting the lead';
    throw new Error(message);
  } catch (err: any) {
    console.error('Lead submission error:', err);
    throw new Error(err?.message || 'Unable to submit enquiry. Please try again.');
  }
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
    postLeadToCRM({
      name: data.full_name,
      phone: data.phone,
      email: data.email,
      vertical: data.vertical,
      team_size: data.team_size,
      notes: data.notes,
      source: data.source || 'WEBSITE',
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
      gclid: data.gclid,
    }),

  submitContact: (data: ContactPayload) =>
    postLeadToCRM({
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company,
      volume: data.volume,
      notes: data.message,
      form_type: 'Contact Inquiry',
    }),

  submitDemoRequest: (data: DemoRequestPayload) =>
    postLeadToCRM({
      name: data.full_name,
      phone: data.phone,
      email: data.email,
      vertical: data.vertical,
      team_size: data.team_size,
      form_type: 'Demo Request',
    }),

  submitPartnerApplication: (data: PartnerApplicationPayload) =>
    postLeadToCRM({
      name: data.full_name,
      email: data.email,
      phone: data.phone,
      company: data.company_name,
      website_url: data.website_url,
      partner_track: data.partner_track,
      expected_clients: data.expected_clients,
      selected_verticals: data.selected_verticals?.join(', '),
      notes: data.notes,
      form_type: 'Partner Application',
    }),

  submitSalesAgentApplication: (data: SalesAgentApplicationPayload) =>
    postLeadToCRM({
      name: data.full_name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      experience: data.experience,
      notes: data.notes,
      form_type: 'Sales Agent Application',
    }),

  submitWhiteLabelApplication: (data: WhiteLabelApplicationPayload) =>
    postLeadToCRM({
      name: data.full_name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      experience: data.experience,
      notes: data.notes,
      form_type: 'White Label Application',
    }),
};
