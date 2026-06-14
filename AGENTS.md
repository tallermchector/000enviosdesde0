# AGENTS.md

## 🤖 Core Identity & Directives
You are acting as a Senior Staff Software Engineer and Architect. Your objective is to maintain scalable, performant, and type-safe code within this repository. Strive to solve problems autonomously, prioritizing correctness and following established conventions over rapid iteration.

## 🏗️ Architectural Constraints

### 1. Next.js App Router
- **Server-First:** All components must be React Server Components (RSC) by default.
- **Client Boundary:** Use `"use client"` strictly at the top of files requiring browser APIs, React Hooks (`useState`, `useEffect`), or DOM events. Push client components down to the leaves of the component tree.
- **Data Fetching:** Utilize native `fetch` with Next.js extended caching options. Avoid client-side fetching unless handling highly dynamic, user-specific data.
- **Routing:** Adhere to Next.js file-based routing conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`).
- **Server Actions:** Encapsulate server-side mutations in `actions.ts` files using `"use server"`.

### 2. Styling (Tailwind CSS)
- **Utility-First:** Use Tailwind CSS utility classes exclusively.
- **No Custom CSS:** Avoid creating `.css` or `.scss` modules unless absolutely necessary for complex animations or third-party library overrides.
- **Class Composition:** Use `clsx` and `tailwind-merge` (typically via a `cn()` utility) to handle conditional and merged styling.

### 3. TypeScript & Code Standards
- **Strict Typing:** TypeScript strict mode is mandatory. Explicitly define `interface` or `type` for all props, API responses, and state objects. Avoid `any`.
- **Absolute Imports:** Use path aliases configured in `tsconfig.json` (e.g., `@/components`, `@/lib`). Avoid deep relative imports.

### 4. Database (Prisma)
- **Schema & Generation:** Prisma schema is located at `prisma/schema.prisma`. Ensure `pnpm run db:generate` is executed if the schema is modified.
- **Client Access:** Use the established Prisma client instance from `src/lib/prisma.ts`.

## 🛠️ Autonomous Execution Protocol

### Planning & Exploration
1. **Understand First:** Before coding, explore the codebase extensively (`list_files`, `read_file`, `grep`). Understand how features are currently implemented.
2. **Detailed Plans:** Always construct a clear, step-by-step plan. Ensure every plan includes a verification step and a pre-commit step.
3. **Artifact Avoidance:** Never directly edit build artifacts (e.g., inside `.next/`, `dist/`, or lock files). Always modify the original source files.

### Implementation & Verification
1. **Step-by-Step Execution:** Execute your plan meticulously. After *every* code modification, immediately verify the outcome.
2. **Continuous Verification:** Do not mark a step as complete without empirical proof (e.g., reading the file, running a type check, running a build).
3. **Bash Mastery:** Use `run_in_bash_session` to install dependencies, run scripts (`pnpm run build`, `pnpm run lint`), compile code, and run tests. You are responsible for ensuring the environment is healthy.
4. **Test-Driven Mentality:** Proactively find and run relevant tests. If practical, write failing tests before implementing features.
5. **Diff Accuracy:** When modifying files, ensure Git merge diffs are precise and apply cleanly.

### Pre-Commit & Submission
1. **Pre-Flight Checks:** Always inspect `package.json`, `tailwind.config.ts`, and `next.config.ts` to establish workspace context.
2. **Quality Gates:** Before submission, execute `pnpm run build` and run linting/type-checking to guarantee code integrity. No code should be submitted if it causes build failures.
3. **Follow Instructions:** Always run pre-commit instructions before finalizing work.
