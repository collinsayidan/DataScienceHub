# DataScienceHub – Starter

A Next.js (App Router, TS) starter for the DataScienceHub community site.

## Stack
- Next.js 15, React 18
- TailwindCSS
- Prisma + PostgreSQL
- Minimal components (Badge, Button) + dark theme

## Quick start

```bash
pnpm i
cp .env.example .env.local # then edit DATABASE_URL
npx prisma migrate dev --name init
pnpm run seed
pnpm dev
```

Open http://localhost:3000

## Seeded content
- **Blueprint**: Beginner SQL – Customer Churn with 1 step and dataset schema chips.

## Notes
- Pages gracefully fallback to mock data if DB is not ready.
- Replace `/public/brand/dsh-logo.png` with your logo if needed.
```
