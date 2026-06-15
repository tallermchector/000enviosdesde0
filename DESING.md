---
colors:
  background: "#f8f9fa"
  foreground: "#191c1d"
  card: "#ffffff"
  card-foreground: "#191c1d"
  popover: "#ffffff"
  popover-foreground: "#191c1d"
  primary: "#0012a1"
  primary-foreground: "#ffffff"
  secondary: "#e9c400"
  secondary-foreground: "#191c1d"
  muted: "#edeeef"
  muted-foreground: "#444556"
  accent: "#001de0"
  accent-foreground: "#ffffff"
  destructive: "#ba1a1a"
  destructive-foreground: "#ffffff"
  border: "#e1e3e4"
  input: "#e1e3e4"
  ring: "#0012a1"
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
  constraints:
    container-max: "1280px"
---

# Overview
The design system of Envíos DosRuedas reflects an industrial, robust, and highly functional aesthetics. Emphasizing precision and speed, it targets logistics and e-commerce through an "Industrial Minimalism" approach. Heavy and impactful typography ensures a dashboard-like environment prioritizing data density and high visibility signals.

# Colors
The color logic relies on high-visibility markers set against a very clean (mostly white/light gray) background to immediately orient user actions.

- **Primary (#0012a1):** Used for primary buttons and focus rings. High contrast, signaling core application actions.
- **Accent/Electric Blue (#001de0):** Serves as an accent for containers or hover states where primary action needs to be distinct.
- **Secondary (#e9c400):** A warning/caution or highlight color that stands out sharply against the rest of the UI.
- **Muted/Borders (#edeeef / #e1e3e4):** Used for subtle backgrounds, component borders, and separation lines.
- **Destructive (#ba1a1a):** High severity error red.

# Typography
Typography is strongly divided into three distinct roles, reinforcing data hierarchy.
- **Headings & Display (`font-display`):** The **Anton** font is used for large callouts, emphasizing the bold, industrial brand identity (e.g., `text-display-lg`, `text-headline-md`). It is often strictly uppercase.
- **Body (`font-sans`):** **Inter** is the standard for long-form reading and general component text, ensuring high legibility.
- **Monospace/Data (`font-mono`):** **JetBrains Mono** is utilized for labels, technical readouts, and tracking codes (`text-label-md`, `text-code-tracking`), delivering a sense of exactness.

# Shapes
The system strictly enforces a **0px** border-radius profile. 
- `rounded-sm`, `rounded-md`, `rounded-lg`, and `rounded-xl` are all overridden to `0px` in the Tailwind configuration to maintain the sharp, precise, industrial feel. 
- Elements like buttons, inputs, and cards feature 90-degree right angles. 

# Components
- **Buttons:** By default, buttons use the primary dark blue (`#0012a1`) with sharp corners (`0px`). Destructive variants use red (`#ba1a1a`), and secondary variants use yellow (`#e9c400`). 
- **Cards & Inputs:** Standardized to have a 1px border (`border-border`) with no rounded corners. Inputs use a 2px `ring` for focus states for accessibility.
- **Accordions:** Clean borders separating items, with a strict angular chevron for interaction.

# Do's and Don'ts
- **Don't** use rounded corners for general UI elements. Although some external components might bring in utility classes like `rounded-md` (such as in `src/components/ui/button.tsx`), the underlying Tailwind configuration overrides these to `0px`.
- **Do** adhere to the `0px` radius convention. The prevalent design extracted from the core configuration overrides any conflicting individual component styles.
