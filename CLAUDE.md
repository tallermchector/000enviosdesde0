# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install project dependencies |
| `pnpm run dev` | Start development server (Next.js hot reload) |
| `pnpm run build` | Build production bundle |
| `pnpm test` | Run test suite |
| `pnpm run lint` | Run ESLint |
| `pnpm run prisma:generate` | Generate Prisma client from schema |
| `pnpm run prisma:migrate` | Run database migrations |
| `pnpm run prisma:studio` | Open Prisma Studio UI |
| `git status` | Show current git status |
| `git log --oneline -10` | Recent commits overview |
| `docker compose up` | Start Docker containers (if used) |
| `pm2 list` | Manage and view running processes (if used) |

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 14 (App Router) with React 18
- **Styling**: Tailwind CSS
- **State Management**: React Context / useReducer
- **Backend**: Node.js API routes under `src/app/api`
- **Database**: PostgreSQL via Prisma ORM
- **ORM**: Prisma (schema in `prisma/schema.prisma`)
- **Authentication**: NextAuth.js (if applicable)
- **Environment Variables**: `.env.local`, loaded via `dotenv`

### Project Structure
```
src/
├─ app/
│  ├─ (root)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/
│  │  ├─ hello/
│  │  │  └─ route.ts
│  │  └─ ... (API route handlers)
│  ├─ contacto/
│  │  └─ page.tsx
│  ├─ cotizar/
│  │  └─ page.tsx
│  ├─ envios-express/
│  │  └─ page.tsx
│  ├─ envios-lowcost/
│  │  └─ page.tsx
│  ├─ enviosflex/
│  │  └─ page.tsx
│  └─ plan-emprendedores/
│     └─ page.tsx
│
├─ components/
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ Card.tsx
│  │  └─ ... (UI primitives)
│  ├─ calculator/
│  │  └─ Calculator.tsx
│  ├─ focus-cards-demo/
│  │  └─ FocusCard.tsx
│  ├─ hero/
│  │  └─ HeroLanding.tsx
│  └─ ... (feature components)
│
├─ lib/
│  ├─ prisma.ts               # Prisma client instance
│  ├─ navegacion.ts           # Navigation utilities
│  ├─ testemonials.ts         # Testimonial utilities
│  └─ utils.ts                # General helpers
│
├─ prisma/
│  ├─ schema.prisma           # Prisma schema
│  ├─ migrations/             # Migration scripts
│  └─ seed/                   # Seed data
│
├─ public/
│  ├─ images/
│  ├─ icons/
│  └─ ... (static assets)
│
├─ src/
│  └─ ... (compiled TypeScript output)
│
├─ .next/
│  └─ (Next.js build output)
│
├─ prisma.service.ts          # Optional service wrapper
├─ next-env.d.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

### Database Access
- Use `prisma` client (`lib/prisma.ts`) for all DB operations.
- Run `npm run prisma:generate` after schema changes.
- Use `npm run prisma:migrate` for applying migrations.
- Seed data via `npm run prisma:seed`.

### API Routes
- Located under `src/app/api/*`.
- Each route corresponds to a REST endpoint.
- Handles request validation, business logic, and DB interactions.
- Returns JSON responses.

### Authentication (if present)
- Implemented via NextAuth.js.
- Protect routes with `getServerSession`.
- Store JWT in HTTP-only cookie.

### Authentication Providers
- Google OAuth (if configured)
- GitHub OAuth (if configured)

### Feature Components
- **Focus Cards**: Demonstrative UI component (`focus-cards-demo/FocusCard.tsx`).
- **Hero Landing**: Large hero section (`hero/HeroLanding.tsx`).
- **Calculator**: Interactive pricing calculator (`calculator/Calculator.tsx`).
- **Testimonials**: Dynamic testimonial carousel (`testimonials/`).

### Asset Management
- Images and icons stored in `public/` and referenced via Next.js `next/image`.
- Optimized loading with `priority` flag for above-the-fold assets.

## Key Design Decisions

1. **Next.js App Router**: Chosen for built-in data fetching (`fetch`, `generateStaticParams`, `generateMetadata`), file-based routing, and server components.
2. **Tailwind CSS**: Utility-first styling for rapid UI development and consistent design system.
3. **Prisma ORM**: Provides type-safe database access and integrates seamlessly with TypeScript.
4. **Modular Component Structure**: UI components grouped by feature (`components/ui`, `components/calculator`, etc.) for reusability.
5. **Separation of Concerns**:
   - API logic lives under `src/app/api`.
   - Business logic lives in `lib/` utilities.
   - Database schema and migrations managed by Prisma.
6. **Environment Isolation**: `.env.local` is ignored from version control; all secrets are loaded at runtime.

## Gotchas & Tips

- **Static vs Dynamic Routes**: Ensure `generateStaticParams` is correctly exported for dynamic routes to avoid fallback errors.
- **Environment Variables**: Prefix with `NEXT_PUBLIC_` only if you intend to expose them to the browser.
- **Image Optimization**: Use `next/image` for automatic optimization; set `loader="acquisition"` for external images.
- **Tailwind JIT**: Ensure `tailwind.config.js` includes the correct `content` paths to avoid missing classes.
- **Prisma Client Regeneration**: After any change to `prisma/schema.prisma`, run `npm run prisma:generate` to avoid runtime errors.
- **Session Management**: When using API routes that depend on user session, always check `session` existence before accessing `req.session`.
- **Testing**: Mock Prisma client in unit tests to avoid DB coupling.

## File Descriptions

- **`src/app/api/**`: Next.js API route handlers. Each file exports functions like `GET`, `POST`, etc.
- **`src/components/`**: Reusable React components organized by feature.
- **`src/lib/`**: Shared JavaScript/TypeScript utilities (e.g., navigation helpers, test data).
- **`src/lib/prisma.ts`**: Singleton Prisma client instance.
- **`prisma/schema.prisma`**: Data model definition, migrations, and seed data.
- **`public/`**: Static assets served as-is.
- **`.next/`**: Compiled Next.js output (do not edit).

## Security Considerations

- **API Keys**: Never hard-code secrets; load via environment variables.
- **Rate Limiting**: Implement rate limiting on sensitive API endpoints.
- **Input Validation**: Validate all incoming request data before processing.
- **CORS**: Configure `next.config.js` appropriately for cross-origin requests.
- **Data Sanitization**: Sanitize any user-provided data before storing or logging.

## Version Control

- Commit `.env.example` with documented variable names.
- Do **not** commit `.env.local` or any secret files.
- Use pre-commit hooks (e.g., `husky`) to lint and format code on commit.

## Future Work

- Integrate Internationalization (i18n) with Next.js i18n routing.
- Add feature flag management via LaunchDarkly or similar.
- Expand component library with Storybook documentation.

---  

**End of CLAUDE.md**