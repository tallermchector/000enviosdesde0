---
colors:
  background: "#f8f9fa"
  foreground: "#000833"
  card: "#ffffff"
  card-foreground: "#000833"
  popover: "#ffffff"
  popover-foreground: "#000833"
  primary: "#000833"
  primary-foreground: "#ffffff"
  secondary: "#e9c400"
  secondary-foreground: "#000833"
  muted: "#e9ecef"
  muted-foreground: "#000833"
  accent: "#000833"
  accent-foreground: "#ffffff"
  destructive: "#ba1a1a"
  destructive-foreground: "#ffffff"
  border: "#000833"
  input: "#000833"
  ring: "#000833"
typography:
  font-family:
    sans: "Inter, sans-serif"
    display: "Anton, sans-serif"
    mono: "JetBrains Mono, monospace"
  font-sizes:
    display-lg: "64px"
    display-md: "48px"
    headline-lg: "40px"
    headline-md: "24px"
    body-lg: "18px"
    body-md: "16px"
    body-sm: "14px"
    label-md: "12px"
    label-sm: "11px"
    code-tracking: "14px"
  weights:
    regular: "400"
    medium: "500"
    bold: "700"
shapes_and_layout:
  border-radius: "0px"
  spacing:
    xs: "4px"
    sm: "8px"
    md: "16px"
    lg: "24px"
    xl: "40px"
    gutter: "16px"
    container-margin: "24px"
    margin-mobile: "16px"
    margin-desktop: "24px"
  constraints:
    container-max: "1280px"
---

# Overview
The design system of Envíos DosRuedas (extracted from `./src`) reflects a highly brutalist, industrial, and robust aesthetic. It strongly favors high-contrast, bold borders, sharp corners, and heavy typography to create a dashboard-like environment prioritizing data density and high visibility signals. It specifically employs deep navy blue (#000833), bright yellow (#e9c400), and stark white to create an impactful visual identity.

# Colors
The color logic relies on high-contrast markers set against clean backgrounds (like white and light gray) to orient user actions immediately.
- **Primary (#000833):** Used heavily for primary buttons, focus rings, inputs, and borders. It establishes the stark brutalist feel of the application.
- **Secondary (#e9c400):** A vibrant yellow highlight color used for strong emphasis and call-to-action elements, standing out sharply against the deep navy blue.
- **Muted (#e9ecef):** Used for subtle backgrounds and secondary elements without distracting from primary actions.
- **Destructive (#ba1a1a):** High severity error red used for destructive actions or warnings.
- **Background / Card (#f8f9fa / #ffffff):** Clean base colors to provide extreme contrast against the dark foreground and primary elements.

# Typography
Typography is strictly divided into three roles, reinforcing data hierarchy and the industrial theme:
- **Headings & Display (`font-display`):** The **Anton** font is utilized for large callouts and headings (`text-display-lg`, `text-headline-md`). It emphasizes a bold, industrial brand identity and is often strictly uppercase.
- **Body (`font-sans`):** **Inter** is the standard for long-form reading, descriptions, and general UI text to maintain high legibility (`text-body-md`, `text-body-sm`).
- **Monospace/Data (`font-mono`):** **JetBrains Mono** is used for labels, technical readouts, and tracking codes (`text-label-md`, `text-code-tracking`), delivering exactness and a technical aesthetic.

# Shapes
The system strictly enforces a **0px** border-radius profile.
- All standard corners (`rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`) are explicitly overridden to `0px` in the Tailwind configuration to maintain a sharp, precise, and brutalist industrial feel.
- Global spacing scales employ fixed units (`xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 40px`), ensuring a highly structured grid.
- A maximum container constraint of `1280px` defines the bounds of the main layouts.

# Components
- **Buttons:** Typically use the primary dark navy (`#000833`) or secondary yellow (`#e9c400`) with sharp `0px` corners, often accompanied by hard `2px solid #000` or `#000833` borders and stark box shadows (e.g., `shadow-[4px_4px_0px_#000]`) to create a brutalist pseudo-3D effect.
- **Cards & Inputs:** Standardized to have a thick `2px` border with absolutely no rounded corners. Hover states typically use translate adjustments (`hover:translate-x-[-2px] hover:translate-y-[-2px]`) alongside larger hard shadows.
- **Containers/Sections:** Often use alternating high-contrast section styles (`.section-even` with dark gradients, `.section-odd` with white backgrounds).

# Do's and Don'ts
- **Do** adhere strictly to the `0px` radius convention. The prevalent design extracted from the core configuration overrides any conflicting individual component styles.
- **Do** use heavy borders (`2px solid black` or `#000833`) and stark box shadows to emphasize interactive elements in a brutalist style.
- **Don't** use rounded corners for general UI elements. Even though some components might include utility classes like `rounded-md` (e.g., in `src/components/ui/button.tsx` or `src/components/layout/navegador.tsx`), these are explicitly overridden to `0px` by the underlying Tailwind configuration and should be avoided or refactored.
- **Don't** mix soft shadows or gradients that break the brutalist style. Stick to hard, solid-color drop shadows (e.g., `shadow-[2px_2px_0px_#000]`).
