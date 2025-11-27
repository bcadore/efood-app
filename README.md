# efood — delivery-front

Front-end for the efood demo (React + TypeScript + Vite) used in the EBAC exercises.

This repository contains a small SPA that reads restaurants and products from a remote API and allows a simple checkout flow.

## Features

- React + TypeScript + Vite
- Redux Toolkit + RTK Query for API calls (single source of truth in `src/services/api.ts`)
- Cart persisted in localStorage (so your basket survives page reloads)
- Centralized color palette in `src/index.ts` (use `colors.primary`, `colors.secondary`, etc.)
- Separation of concerns in components (Cart logic split into a hook, forms and UI components)

## Environment

The app uses an environment variable to change the API base URL. Create a `.env` file in the project root (for development) and add:

```env
VITE_API_BASE=https://api-ebac.vercel.app/api/efood
```

If the variable is not set, the app will fall back to the above URL.

## Local setup

1) Install dependencies

```powershell
npm install
```

2) Run the app in development mode (Vite)

```powershell
npm run dev
# Open the address displayed by Vite (e.g. http://localhost:5173/)
```

3) Build for production

```powershell
npm run build
```

4) Preview the production build

```powershell
npm run preview
```

## What's in this branch

This set of changes includes several safe, non-breaking improvements:

- Environment-configurable API base URL (see `VITE_API_BASE`)
- RTK Query types exported (for better type-safety across the app)
- Centralized and expanded colors palette (`white`, `black`, `text`) and replacement of remaining literal color values
- Modal inline styles moved to `styles.ts` (cleaner JSX)
- Cart persistence using localStorage (`src/store/index.ts` saves the `cart` slice under `efood:cart`)

## Suggestions / next steps

- Add tests (unit + integration) to cover the checkout flow
- Add e2e tests to validate UX on critical flows
- Add a CI workflow to run build, lint and tests before merge

If you want, I can open a dedicated branch/PR with these changes. ✅
