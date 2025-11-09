# CeyLex Gems - Font Style Guide

## Typography Overview

This project uses a modern, friendly typography system with Nunito - a round sans-serif font that creates an approachable, contemporary aesthetic while maintaining excellent readability and professional appearance.

## Primary Font

### Nunito (Universal)
- **Usage**: All text elements - headings (H1-H6), body text, navigation, buttons, forms
- **Character**: Modern, round, friendly sans-serif font
- **Purpose**: Creates approachable, contemporary brand personality with excellent readability
- **Weights**: 
  - 400 (Regular) for body text
  - 600 (Semi-bold) for navigation and buttons  
  - 700 (Bold) for headings
- **Letter Spacing**: -0.015em for headings, normal for body text

## Font Implementation

### CSS Variables
```css
--font-nunito: Nunito variable font
```

### Font Weights Available

#### Nunito
- Light (300)
- Regular (400) - Primary body text  
- Medium (500)
- Semi-bold (600) - Navigation and buttons
- Bold (700) - Primary heading weight
- Extra Bold (800)
- Black (900)

## Usage Examples

### Headings
All headings automatically use Nunito Bold (700) with optimized spacing for a modern, friendly appearance.

### Body Text
All paragraphs, descriptions, and general text use Nunito Regular (400) for optimal readability and approachable feel.

### Navigation
Navigation items use Nunito Semi-bold (600) for clear hierarchy and modern aesthetics.

### Buttons & Forms
Interactive elements use Nunito Semi-bold (600) for confident, approachable interaction design.

## Utility Classes

Custom utility classes have been added for easy font application:

- `.font-heading` - Applies Nunito Bold with heading styles
- `.font-body` - Applies Nunito Regular with body text styles  
- `.font-nav` - Applies Nunito Semi-bold for navigation elements
- `.text-serif` - Forces Nunito font family (updated for consistency)
- `.text-sans` - Forces Nunito font family

## Font Loading

Fonts are loaded via Next.js Google Fonts integration in `app/layout.tsx`:

```tsx
import { Lato, Playfair_Display } from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})
```

## Typography Hierarchy

### Font Sizes (Enhanced for Better Readability)
- **H1**: 3.5rem (56px) - Main page titles
- **H2**: 2.75rem (44px) - Section headers  
- **H3**: 2.25rem (36px) - Subsection titles
- **H4**: 1.75rem (28px) - Card titles
- **H5**: 1.375rem (22px) - Minor headings
- **H6**: 1.125rem (18px) - Small headings
- **Body**: 1.125rem (18px) - Improved from default 16px
- **Small**: 1rem (16px) - Supporting text

### Line Heights
- **Headings**: 1.2-1.5 (tighter for better proportion)
- **Body Text**: 1.7-1.8 (generous for readability)

## Brand Alignment

The typography choices align with CeyLex Gems' brand values:

- **Luxury**: Playfair Display conveys elegance and premium quality
- **Trust**: Lato provides professional, reliable readability
- **Heritage**: Serif headings honor traditional gemstone craftsmanship
- **Modern**: Sans-serif body text ensures contemporary accessibility

## Best Practices

1. Always use semantic HTML elements (h1-h6, p) for automatic font application
2. Use utility classes sparingly - prefer semantic styling
3. Maintain consistent font weights across similar elements
4. Ensure sufficient contrast with background colors
5. Test readability across different screen sizes

## File Locations

- Font configuration: `app/layout.tsx`
- Typography styles: `app/globals.css`
- Font variables: CSS custom properties in `globals.css`