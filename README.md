# LeadFlow CRM

LeadFlow is an original marketing CRM and lead attribution starter. The repository contains a responsive React/Vite dashboard and a REST API backed by PostgreSQL and Prisma.

## Run the dashboard

```sh
cd frontend
npm install
npm run dev
```

The dashboard uses clearly labeled sample data and works without a backend. Demo sign-in is prefilled with `demo@leadflow.app` / `leadflow-demo`; this client-side demo does not validate credentials. Responsive layouts, lead search, source/status/owner/type filters, lead detail view, theme toggle, date selector, and dashboard actions are interactive.

## Run the API

1. Create a PostgreSQL database and copy `backend/.env.example` to `backend/.env`.
2. Set `DATABASE_URL` and a strong `JWT_SECRET`.
3. From `backend`, run `npm install`, `npx prisma generate --schema ../database/schema.prisma`, and `npx prisma db push --schema ../database/schema.prisma`.
4. Run `npm run dev`.

The API exposes health, JWT login, workspace-scoped lead listing, creation and updates. Login is rate limited; passwords are stored as bcrypt hashes; JWTs have issuer, audience and expiry; Helmet and Zod validation are enabled. Create the first admin user through a controlled provisioning workflow before deployment. Do not use the dashboard's sample names, amounts or metrics as actual business data.

## Production integration notes

Use short-lived access tokens with refresh-token rotation and secure HttpOnly cookies for browser deployments. Add migrations and audit logging before production rollout. Channel integrations (Google Ads, Meta, GBP, GA4, telephony and WhatsApp) need provider OAuth credentials, webhook verification, retry queues and consent-aware data handling; this starter provides the CRM data foundation, not live provider connections. The dashboard demo login is client-side only; use `/api/auth/login` when connecting a real deployment.
