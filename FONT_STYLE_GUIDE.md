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
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
})
```

## Typography Hierarchy

### Font Sizes (Significantly Enhanced for Impact and Readability)
- **H1**: 4.5rem (72px) - Hero titles with maximum impact
- **H2**: 3.5rem (56px) - Major section headers  
- **H3**: 2.75rem (44px) - Subsection titles
- **H4**: 2.25rem (36px) - Card and content titles
- **H5**: 1.75rem (28px) - Minor headings
- **H6**: 1.375rem (22px) - Small headings
- **Body**: 1.125rem (18px) - Optimized for readability
- **Small**: 1rem (16px) - Supporting text

### Font Weights
- **H1**: 800 (Extra Bold) - Maximum visual impact
- **H2-H3**: 700 (Bold) - Strong section hierarchy
- **H4-H6**: 600 (Semi-bold) - Clear but approachable
- **Body**: 400 (Regular) - Optimal readability
- **Navigation/Buttons**: 600 (Semi-bold) - Clear interaction cues

### Line Heights & Spacing
- **H1**: 1.1 (tight for impact) + 1.5rem bottom margin
- **H2**: 1.2 (balanced) + 1.25rem bottom margin
- **H3**: 1.25 (readable) + 1rem bottom margin
- **H4-H6**: 1.3-1.45 (comfortable) + proportional margins
- **Body Text**: 1.8 (generous for readability) + 1.25rem bottom margin

### Responsive Behavior
- Mobile devices automatically scale down headings for optimal viewing
- H1 reduces to 3rem (48px) on mobile
- Body text reduces to 1rem (16px) on mobile for better mobile readability

## Brand Alignment

The typography choice aligns with CeyLex Gems' evolved brand values:

- **Approachable**: Nunito's round letterforms create a friendly, welcoming impression
- **Modern**: Contemporary sans-serif design appeals to current aesthetic trends
- **Trustworthy**: Clear, readable typography builds confidence and reliability
- **Accessible**: Excellent readability across all devices and user needs
- **Distinctive**: Round characteristics create memorable brand personality

## UI Design Enhancements

### Modern Component Styles
- **Enhanced Cards**: `.card-enhanced` - Modern shadows and hover effects
- **Primary Buttons**: `.btn-primary` - Gradient backgrounds with hover animations
- **Secondary Buttons**: `.btn-secondary` - Clean styling with subtle interactions
- **Text Effects**: `.text-gradient` and `.text-shadow` for visual emphasis

### Interactive Elements
- Smooth transitions using cubic-bezier easing
- Hover effects with subtle transforms and enhanced shadows
- Focus states with colored rings and smooth transitions
- Enhanced button padding and border radius for modern feel

### Spacing System
- **Section Spacing**: `.section-spacing` - 5rem bottom margins for major sections
- **Content Spacing**: `.content-spacing` - Consistent 1.5rem spacing between elements
- **Typography Margins**: Automatic bottom margins on all headings and paragraphs

## Best Practices

1. Always use semantic HTML elements (h1-h6, p) for automatic font application
2. Leverage the enhanced spacing system for consistent layouts
3. Use the modern button and card classes for cohesive UI design
4. Apply responsive considerations - typography scales on mobile
5. Maintain visual hierarchy with the enhanced font weight system
6. Test interactive elements for smooth animations and accessibility

## File Locations

- Font configuration: `app/layout.tsx`
- Typography styles: `app/globals.css`
- Font variables: CSS custom properties in `globals.css`