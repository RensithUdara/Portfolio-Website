# CeyLex Gems - Font Style Guide

## Typography Overview

This project uses a carefully selected typography system that reflects the luxury and premium nature of the gemstone business while maintaining excellent readability and modern aesthetics.

## Primary Fonts

### 1. Playfair Display (Headings)
- **Usage**: All headings (H1-H6), titles, section headers
- **Character**: Classic, elegant serif font
- **Purpose**: Perfect for luxury and premium brands
- **Weight**: 600 (Semi-bold) as default
- **Letter Spacing**: -0.025em for better readability

### 2. Lato (Body Text)
- **Usage**: Paragraphs, descriptions, body content, navigation, buttons, forms
- **Character**: Clean, modern, highly readable sans-serif
- **Purpose**: Professional appearance with excellent readability
- **Weight**: 400 (Regular) for body text, 500 (Medium) for navigation and buttons

## Font Implementation

### CSS Variables
```css
--font-lato: Lato variable font
--font-playfair: Playfair Display variable font
```

### Font Weights Available

#### Lato
- Light (300)
- Regular (400) - Primary body text
- Bold (700)
- Black (900)

#### Playfair Display  
- Regular (400)
- Medium (500)
- Semi-bold (600) - Primary heading weight
- Bold (700)
- Extra Bold (800)
- Black (900)

## Usage Examples

### Headings
All headings automatically use Playfair Display with proper sizing and weights.

### Body Text
All paragraphs, descriptions, and general text use Lato for optimal readability.

### Navigation
Navigation items use Lato Medium (500) for a professional, clean look.

### Buttons & Forms
Interactive elements use Lato with appropriate weights for clear action items.

## Utility Classes

Custom utility classes have been added for easy font application:

- `.font-heading` - Applies Playfair Display with heading styles
- `.font-body` - Applies Lato with body text styles  
- `.font-nav` - Applies Lato Medium for navigation elements
- `.text-serif` - Forces Playfair Display font family
- `.text-sans` - Forces Lato font family

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