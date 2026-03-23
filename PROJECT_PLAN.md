# MB Ambulance Website Project Plan

## Core Direction

- The current live site is built on WordPress.
- This rebuild will **not** use WordPress.
- We are building the site from scratch as a custom frontend project.
- The current site will be used as a reference for:
  - brand colors
  - content structure
  - page ideas

## Goals

- Keep the existing brand colors.
- Make the site feel more modern, clean, and trustworthy.
- Use a frontend stack that feels familiar and manageable.
- Keep the codebase simple enough to maintain as you get back into coding.

## Recommended Stack

- **Framework:** React
- **Build tool:** Vite
- **Languages:** HTML-style JSX, CSS, JavaScript
- **Styling:** Tailwind CSS

## Why This Stack

- React gives us a modern component-based workflow.
- Vite keeps setup fast and lightweight.
- Tailwind helps move quickly without fighting CSS from scratch on every section.
- This keeps the project simpler than introducing a heavier full-stack framework too early.

## Recommended Hosting Direction

Because this is a custom frontend project, we should plan for static or frontend-friendly hosting, such as:

- Vercel
- Netlify
- GitHub Pages for simple previews

If the site later needs forms, CMS editing, or dynamic features, we can add those intentionally instead of inheriting WordPress complexity.

## Project Phases

### Phase 1

- Review the current live site
- Identify pages and sections to keep, remove, or redesign
- Pull the existing brand colors
- Define the new visual direction

### Phase 2

- Set up a React app with Vite
- Add Tailwind CSS
- Create a clean project structure
- Build shared layout pieces like header, footer, buttons, and sections

### Phase 3

- Rebuild the homepage
- Rebuild key internal pages
- Improve typography, spacing, layout, and mobile behavior

### Phase 4

- Add polish, accessibility improvements, and performance cleanup
- Connect forms or integrations if needed
- Prepare for deployment

## Likely Starter Pages

- Home
- About
- Services
- Contact
- Volunteer, donate, or support pages if needed

## Design Direction

- Keep the current color identity
- Use stronger spacing and cleaner layout structure
- Improve readability and hierarchy
- Make calls to action easier to find
- Create a more polished mobile experience

## Immediate Next Step

Set up the frontend app with:

- React
- Vite
- Tailwind CSS

This is the cleanest starting point for the rebuild.
