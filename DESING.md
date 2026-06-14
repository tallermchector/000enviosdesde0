---
name: Envios DosRuedas
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444556'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#757688'
  outline-variant: '#c5c5d9'
  surface-tint: '#3043f5'
  primary: '#0012a1'
  on-primary: '#ffffff'
  primary-container: '#001de0'
  on-primary-container: '#a8afff'
  inverse-primary: '#bdc2ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fed726'
  on-secondary-container: '#715e00'
  tertiary: '#003906'
  on-tertiary: '#ffffff'
  tertiary-container: '#00530d'
  on-tertiary-container: '#36d041'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000866'
  on-primary-fixed-variant: '#001de0'
  secondary-fixed: '#ffe16e'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#73ff6f'
  tertiary-fixed-dim: '#4de251'
  on-tertiary-fixed: '#002202'
  on-tertiary-fixed-variant: '#00530d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system emphasizes speed, precision, and industrial reliability. It transitions the high-energy "Extreme Logistics" aesthetic into a high-productivity light mode environment. The brand personality is authoritative and efficient, targeting logistics managers and field operators who require clarity under high-pressure scenarios.

The style is **Industrial Minimalism**. It utilizes heavy, impactful typography paired with a high-visibility palette to direct focus. The interface should feel like a professional dashboard—utilitarian, robust, and unmistakably professional. White space is used as a functional separator for complex data sets, while the color palette draws from industrial safety and signal standards.

## Colors
The palette is anchored by a sterile white base to maximize contrast, utilizing a high-visibility "Signal" logic for primary, secondary, and tertiary accents.

- **Primary Electric Blue (#001DE0):** Reserved for primary actions, critical path indicators, and core branding.
- **Secondary Safety Yellow (#E9C400):** Used for attention-grabbing elements, warnings, or highlighting active status and priority shipments.
- **Tertiary Efficiency Green (#13BB2E):** Dedicated to "Go" states, completed logistics milestones, and positive system feedback.
- **Neutral Greys:** Provide soft layering for containers and borders without sacrificing the "clean" feel.
- **High-Contrast Text:** Absolute black (#000000) is used for body text to ensure maximum legibility against the light background.

## Typography
Typography is the primary driver of the design's hierarchy. 

- **Display & Headlines:** Use **Anton** for all high-level headers. It must be uppercase to convey the industrial "extreme" nature of the brand.
- **Body Copy:** **Inter** provides a neutral, systematic feel that balances the aggressive nature of the headlines, ensuring long-form data remains readable.
- **Data & Labels:** **JetBrains Mono** is used for technical strings (tracking numbers, timestamps, coordinates) to emphasize the precision of the logistics sector.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (1280px max-width) and a fluid model for mobile.

- **Grid:** 12-column grid with 16px gutters.
- **Rhythm:** An 8px linear scale drives all spacing decisions. 
- **Density:** The design favors a high-information density. Use `md` (16px) for standard padding and `sm` (8px) for internal component spacing to keep the UI compact and efficient.
- **Mobile:** Margins shrink to 16px, and columns collapse to a single-stack vertical flow.

## Elevation & Depth
In this light mode system, depth is communicated through **Tonal Layers** and **Hard Borders** rather than soft shadows.

- **Level 0 (Background):** #F8F9FA.
- **Level 1 (Card/Surface):** #FFFFFF with a 1px solid border.
- **Level 2 (Active/Hover):** Electric Blue (#001DE0) or Safety Yellow (#E9C400) accent borders for a "brutalist-lite" feel.
- **Shadows:** Avoid diffused ambient shadows. Use high-opacity, short-offset shadows (e.g., 4px 4px 0px #00000010) if depth is absolutely required for modals.

## Shapes
The design system uses a **Sharp (0px)** roundedness profile. This reinforces the industrial, rugged, and precise nature of logistics software. Every button, input field, and card must have 90-degree corners. 

*Exception:* Status dots and specific toggle indicators may use circular shapes for immediate recognition.

## Components

- **Buttons:** Sharp corners. Primary buttons are solid #001DE0 with #FFFFFF text. Secondary/Caution buttons use #E9C400 with black text.
- **Input Fields:** 1px solid black or dark grey border. Labels use JetBrains Mono in uppercase. Active state uses a 2px Electric Blue bottom border.
- **Chips/Status:** Rectangular with a solid background color. Use Efficiency Green (#13BB2E) for success/delivered states and Safety Yellow (#E9C400) for pending/warning states.
- **Cards:** No shadows. 1px solid border. Headers within cards should use a light grey background to separate metadata from content.
- **Data Tables:** High density. Zebra striping using #F8F9FA. Vertical borders are omitted; only horizontal dividers are used to emphasize row-based tracking.
- **Tracking Progress:** Linear, thick bars using Electric Blue for completed stages and Efficiency Green for "finalized" states.