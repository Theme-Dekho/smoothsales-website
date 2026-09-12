# SmoothSales.ai â€” Marketing Microservice (`smoothsales-marketing`)

Standalone Next.js marketing and public landing website for [SmoothSales.ai](https://smoothsales.ai).

## ðŸš€ Microservice Overview
- **Domain**: `smoothsales.ai` (Local: `http://localhost:3000`)
- **Responsibilities**:
  - High-conversion marketing landing page
  - Interactive feature problem/fix showcase
  - Real-time WhatsApp Cloud API ecosystem & integration carousel
  - Transparent flat pricing calculator & plan comparison
  - Lead capture, WhatsApp chat bubble, and outbound links to Tenant CRM workspace
- **Connected Services**:
  - `smoothsales-crm` (`http://localhost:3001` / `app.smoothsales.ai`)
  - `smoothsales-superadmin` (`http://localhost:3002` / `admin.smoothsales.ai`)
  - `smoothsales-partner-portal` (`http://localhost:3003` / `partners.smoothsales.ai`)

## ðŸ› ï¸ Running Locally
```bash
npm run dev
# Starts on http://localhost:3000
```

## ðŸ“¦ Build for Production
```bash
npm run build
npm run start
```
