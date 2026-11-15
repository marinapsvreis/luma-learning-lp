# Luma Learning

A responsive landing page for the Buzzvel Front-End Engineer challenge, built with Next.js App Router, TypeScript and Tailwind CSS.

## Getting started

Use Node.js 22 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Open [English](http://localhost:3000/) or [Português de Portugal](http://localhost:3000/pt). For a production build and preview:

```sh
pnpm build
pnpm start
```

## Decisions and known gaps

- The route composes components from `app/components/sections` and `app/components/layout`. Reusable components live in `app/components/shared`. Component-specific CSS sits beside the component. Tailwind utilities handle common responsive layouts and typography, with shared tokens in `app/styles/theme.css` and common styles in `app/styles/shared.css`.
- English and European Portuguese copy live in colocated `*.copy.ts` files, including accessible names, image descriptions and form feedback. The navbar shows both language options side by side and highlights the current language. Each route sets its own document language and page metadata. The Portuguese community section uses localized copy in place of the English frame's placeholder text.
- The mobile menu and contact form keep state and event handling in colocated hooks. Presentational sections render without client-side state.
- The mobile and desktop screenshots guided section order and spacing. Tablet uses a two-column category grid and stacks the major page sections until the desktop breakpoint.
- The header stays visible while scrolling. The supplied mobile design showed the menu closed, so the expanded menu uses vertically stacked navigation links and two side-by-side action buttons. Menu animations and hover transitions respect reduced-motion preferences.
- The contact form follows the selected page language across breakpoints. The learning steps use the mobile reference's sequential numbering on both layouts.
- Navigation uses in-page links where relevant. Without prototype destinations, course details, category details, account and community actions use local dialogs. Footer destinations without dedicated pages point to related sections. Contact submission is simulated in the browser.
- The hero uses separate Figma image exports for mobile and desktop to preserve each crop. The learner avatars, featured course photo, Alex Morgan’s portrait and community collage also use Figma exports.
- The final call-to-action decoration repeats horizontally on wide desktop screens. Shapes keep their proportions and can be clipped at the section edge. The mobile reference uses a plain background. Decorative placement is approximate.
- The development and build scripts use webpack because Turbopack's worker resolved to an inactive Node.js shim on the Windows development host.
- Approximate total time spent on implementation, design refinements and checks: 5 hours.

## AI and verification

Codex helped extract requirements, compare the supplied desktop and mobile screenshots, implement and localize the page, and run checks. The production build passed for both routes, including TypeScript and Tailwind compilation. The generated HTML was checked for localized content, document language, switcher links and the active-language marker. A complete desktop and mobile browser check is still pending.
