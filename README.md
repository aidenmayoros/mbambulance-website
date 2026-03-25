# MB Ambulance Website

Custom React + Vite rebuild for the Morongo Basin Ambulance website.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## ShadCN UI

This project uses [ShadCN UI](https://ui.shadcn.com/) for its component library. ShadCN components are not installed as a package — they're copied directly into your project at `src/components/ui/` so you can customize them freely.

### Adding a new component

```bash
npx shadcn@latest add <component-name>
```

For example, to add the Dialog component:

```bash
npx shadcn@latest add dialog
```

This creates a new file at `src/components/ui/dialog.tsx` that you own and can edit.

You can browse all available components at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

### Using a component

Import from `@/components/ui/` and use like any React component:

```jsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function Example() {
  return (
    <Card>
      <CardContent>
        <Badge variant="outline">New</Badge>
        <CardTitle>Hello</CardTitle>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Currently installed components

- `badge` — Labels and tags
- `button` — Clickable actions
- `card` — Content containers (`Card`, `CardHeader`, `CardContent`, `CardTitle`, `CardDescription`)
- `navigation-menu` — Desktop nav links
- `separator` — Horizontal/vertical dividers
- `sheet` — Slide-out mobile menu panel

## Current Direction

- Keep the current brand colors
- Redesign the site to feel more modern and cleaner
- Rebuild the existing pages and content structure in a custom frontend
- Start by rebuilding the homepage in React with Tailwind utilities
