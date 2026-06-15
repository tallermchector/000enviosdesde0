---
version: alpha
name: Envíos DosRuedas
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
  display-lg:
    fontFamily: Anton, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.02em
  display-md:
    fontFamily: Anton, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Anton, sans-serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
  headline-md:
    fontFamily: Anton, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.2
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: JetBrains Mono, monospace
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono, monospace
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.05em
  code-tracking:
    fontFamily: JetBrains Mono, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.1em
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  container-margin: 24px
  container-max: 1280px
---

## Overview

The design system of Envíos DosRuedas reflects an industrial, robust, and highly functional aesthetics. Emphasizing precision and speed, it targets logistics and e-commerce through an "Industrial Minimalism" approach. Heavy and impactful typography ensures a dashboard-like environment prioritizing data density and high visibility signals.

## Colors

The color logic relies on high-visibility markers set against a very clean (mostly white/light gray) background to immediately orient user actions.

- **Primary (#000833):** Used for primary buttons and focus rings. High contrast, signaling core application actions.
- **Secondary (#e9c400):** A warning/caution or highlight color that stands out sharply against the rest of the UI.
- **Muted/Borders (#e9ecef / #000833):** Used for subtle backgrounds, component borders, and separation lines.
- **Destructive (#ba1a1a):** High severity error red.

## Typography

Typography is strongly divided into three distinct roles, reinforcing data hierarchy.
- **Headings & Display:** The **Anton** font is used for large callouts, emphasizing the bold, industrial brand identity (e.g., `display-lg`, `headline-md`). It is often strictly uppercase.
- **Body:** **Inter** is the standard for long-form reading and general component text, ensuring high legibility.
- **Monospace/Data:** **JetBrains Mono** is utilized for labels, technical readouts, and tracking codes (`label-md`, `code-tracking`), delivering a sense of exactness.

## Layout

The layout uses a central container constraint prioritizing functional whitespace and alignment. The `container-max` is set to `1280px` for a desktop grid, establishing an industrial maximum width layout.

## Shapes

The system strictly enforces a **0px** border-radius profile. 
- `rounded-sm`, `rounded-md`, `rounded-lg`, and `rounded-xl` are all overridden to `0px` in the Tailwind configuration to maintain the sharp, precise, industrial feel. 
- Elements like buttons, inputs, and cards feature 90-degree right angles. 

## Components

- **Buttons:** By default, buttons use the primary dark blue (`#000833`) with sharp corners (`0px`). Destructive variants use red (`#ba1a1a`), and secondary variants use yellow (`#e9c400`). 
- **Cards & Inputs:** Standardized to have a 1px border (`border-border`) with no rounded corners. Inputs use a 2px `ring` for focus states for accessibility.
- **Accordions:** Clean borders separating items, with a strict angular chevron for interaction.

## Do's and Don'ts

- **Don't** use rounded corners for general UI elements. Although some external components might bring in utility classes like `rounded-md` (such as in `src/components/ui/button.tsx`), the underlying Tailwind configuration overrides these to `0px`.
- **Do** adhere to the `0px` radius convention. The prevalent design extracted from the core configuration overrides any conflicting individual component styles.
