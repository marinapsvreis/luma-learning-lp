# Luma Learning

A responsive landing page for the Buzzvel Front-End Engineer challenge, built with Next.js App Router, TypeScript and Tailwind CSS.

## Getting started

Use Node.js 22 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. For a production build and preview:

```sh
pnpm build
pnpm start
```

## Decisions and known gaps

- The route composes section components. Tailwind utilities handle common responsive layouts and typography. Shared Figma tokens live in `app/styles/theme.css`, and styles specific to a section or interaction sit beside the corresponding component.
- The mobile and desktop screenshots guided section order and spacing. Tablet uses a two-column category grid and stacks the major page sections until the desktop breakpoint.
- The header stays visible while scrolling. The supplied mobile design showed the menu closed, so the expanded menu uses vertically stacked navigation links and two side-by-side action buttons. Its opening animation respects reduced-motion preferences.
- The contact form uses English throughout to match the rest of the page. The learning steps use the mobile reference's sequential numbering on both layouts.
- Navigation uses in-page links where relevant. Without prototype destinations, course details, category details, account and community actions use local dialogs. Footer destinations without dedicated pages point to related sections. Contact submission is simulated in the browser.
- The hero uses separate Figma image exports for mobile and desktop to preserve each crop. The learner avatars, featured course photo, Alex Morgan’s portrait and community collage also use Figma exports.
- The final call-to-action decoration repeats horizontally on wide desktop screens. Shapes keep their proportions and can be clipped at the section edge. The mobile reference uses a plain background. Decorative placement is approximate.
- The development and build scripts use webpack because Turbopack's worker resolved to an inactive Node.js shim on the Windows development host.
- Approximate total time spent on implementation, design refinements and checks: 5 hours.

## AI and verification

Codex helped extract requirements, compare the supplied desktop and mobile screenshots, implement the page and run checks. The latest production build passed, including TypeScript and Tailwind compilation. The generated HTML and CSS were checked for the main sections, responsive utilities and theme tokens. A complete desktop and mobile browser check is still pending.
