## QuickHire Frontend

Frontend for the QuickHire mini job board task, built with Next.js (App Router) and Tailwind CSS.

This frontend integrates with a backend API that exposes:
- `GET /api/jobs`
- `GET /api/jobs/:id`
- `POST /api/jobs`
- `DELETE /api/jobs/:id`
- `POST /api/applications`

## Features
- Landing page sections matching the provided design.
- Job Listings page with:
  - Search by title/company
  - Filter by location
  - Filter by category
- Job Detail page with full description + Apply form.
- Basic Admin Jobs page:
  - Add new jobs
  - Delete existing jobs
- Responsive layout across sections.

## Routes
- `/` Home
- `/jobs` Job listings
- `/jobs/[id]` Job details + apply
- `/admin/jobs` Basic admin view

## Environment Variables
Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

## Run Locally
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`

## Notes
- The frontend expects JSON responses in the shape:
  - success: boolean
  - data / message
- Make sure your backend has CORS enabled for your frontend origin.

## Build
```bash
npm run build
npm run start
```
