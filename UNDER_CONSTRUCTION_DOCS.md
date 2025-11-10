# Under Construction Component

A beautiful, gemstone-themed "Under Construction" page component that matches the CeyLex Gems design system.

## Overview

The `UnderConstruction` component provides a professional and visually appealing way to display pages that are not yet ready or when encountering 404 errors. It maintains the dark blue color scheme with gold accents that match the rest of the CeyLex Gems website.

## Features

- ✨ Animated gemstone icon with pulsing effects
- 🎨 Gradient backgrounds matching the site's color scheme  
- 📊 Optional progress indicator with customizable percentage
- 🔧 Customizable title and message content
- 🚀 Smooth animations and hover effects
- 📱 Fully responsive design
- 🎯 Call-to-action buttons to guide users back to active pages

## Usage

### Basic Usage
```tsx
import { UnderConstruction } from "@/components/under-construction"

export default function MyPage() {
  return <UnderConstruction />
}
```

### Customized Usage
```tsx
import { UnderConstruction } from "@/components/under-construction"

export default function MyPage() {
  return (
    <UnderConstruction
      title="New Feature Coming Soon"
      message="We're crafting an exciting new experience that will revolutionize how you explore our gemstones!"
      progressPercentage={85}
      estimatedCompletion="December 2025"
      showProgress={true}
      showNavigation={true}
      showFooter={true}
    />
  )
}
```

### For 404 Pages
```tsx
import { UnderConstruction } from "@/components/under-construction"

export default function NotFound() {
  return (
    <UnderConstruction
      title="Page Not Found"
      message="This page is still being polished to perfection! Explore our stunning collection while we work on this."
      showProgress={false}
      estimatedCompletion="Available Soon"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Under Construction"` | Main heading text |
| `message` | `string` | Default gemstone message | Descriptive text below the title |
| `showProgress` | `boolean` | `true` | Whether to show the progress bar |
| `progressPercentage` | `number` | `75` | Progress bar percentage (0-100) |
| `estimatedCompletion` | `string` | `"Coming Soon"` | Expected completion text |
| `showNavigation` | `boolean` | `true` | Whether to show the site navigation |
| `showFooter` | `boolean` | `true` | Whether to show the site footer |

## Design Elements

### Color Scheme
- Primary background: Dark blue gradient (`from-[#1a2557] via-[#243370] to-[#2d3f8f]`)
- Accent color: Amber/Gold (`text-amber-400`, `bg-amber-500`)
- Text: White with opacity variations
- Card: Semi-transparent white with backdrop blur

### Animations
- Spinning gemstone icon with pulsing outer ring
- Floating background elements
- Animated progress bar
- Hover effects on buttons
- Smooth fade-in animations

### Typography
- Uses the site's Nunito font family
- Gradient text effects for the main title
- Consistent sizing and spacing with the main site

## Examples in the Project

1. **Generic Under Construction** - `/under-construction`
2. **404 Not Found** - Any non-existent route
3. **Custom Implementation** - Can be used in any page component

## Responsive Design

The component is fully responsive with:
- Mobile-optimized text sizes
- Flexible button layouts (stack vertically on mobile)
- Proper spacing adjustments for small screens
- Touch-friendly button sizes

## Accessibility

- Semantic HTML structure
- Screen reader friendly text
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states for interactive elements

## Integration

To use this component in your Next.js pages:

1. Import the component: `import { UnderConstruction } from "@/components/under-construction"`
2. Return it from your page component
3. Customize props as needed

The component automatically includes navigation and footer unless disabled via props, providing a consistent user experience throughout the site.