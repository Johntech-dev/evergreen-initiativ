# Evergreen Initiative — Master Design System

## Core Identity
- **Vibe**: Civilizational Maturity, Solarpunk, Cybernetic Stewardship, "Awe before Analysis".
- **Philosophy**: Akea (Stones vs. Bricks), Orbit logic (sustaining) over Occupation logic (extracting).
- **Core Motif**: The Trajectory Arc (The Long Way Around).

## Color Palette
- **Primary Blue**: `#003366` (Deep, Trustworthy, Night Sky)
- **Accent Blue**: `#0066cc` (Active, Vibrant, Atmosphere)
- **Primary Black**: `#000000` (Deep Space, Void, Grounding)
- **Primary White**: `#ffffff` (Clarity, Light, Future)
- **Muted Gray**: `#94a3b8` (Slate-400 - for secondary elements)
- **Surface**: Glassmorphism (White/10 or Black/10 with backdrop-blur)

## Typography
- **Headings**: `Outfit` (Modern, geometric, premium)
- **Body**: `Inter` (Clear, legible, functional)
- **Display**: High-contrast, tracking-tight, leading-tight.

## Design Rules
1. **Precision over Force**: Use subtle gradients and fine lines (0.5px to 1px) instead of heavy shadows.
2. **Whitespace as Infrastructure**: Generous padding to allow content to breathe.
3. **No Emojis as Icons**: Use **Lucide** or **Heroicons** SVG only.
4. **Stable Hover States**: Use color/opacity transitions (150-300ms).
5. **Legibility First**: Minimum 4.5:1 contrast ratio.

## Animation (GSAP)
- **Entrance**: Staggered fades from bottom (30px) with power4.out.
- **Micro-interactions**: Subtle scale (1.02) on card hover.
- **The Long Way Around**: Morphing SVG arcs and path-following particles.

## Anti-Patterns
- No "Futuristic" noise or glowing neon.
- No "Save the World" hyperbolic language.
- No heavy-handed shadows or skeuomorphism.
- No 0 opacity in light mode (use 80% minimum for glassmorphism).