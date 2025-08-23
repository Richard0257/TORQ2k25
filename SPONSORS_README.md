# Sponsors Management

This document explains how to add and manage sponsors for the TORQ2K25 website.

## Adding New Sponsors

### 1. Create Logo Image
- Add your sponsor logo to the `public/sponsors/` directory
- Supported formats: SVG (recommended), PNG, JPG
- Recommended size: 200x200px minimum for good quality

### 2. Update Sponsors Component
Edit `src/components/Sponsors.tsx` and add your sponsor to the `sponsors` array:

```typescript
const sponsors = [
  // ... existing sponsors
  {
    name: "Your Company Name",
    logo: "/sponsors/your-logo.svg",
    tier: "gold", // platinum, gold, silver, or bronze
    description: "Your partnership description"
  }
];
```

### 3. Add to Hero Section (Optional)
If you want the sponsor to appear in the hero section showcase, add it to `src/components/Hero.tsx`:

```typescript
<div className="w-8 h-8 hover:scale-110 transition-transform duration-300">
  <img src="/sponsors/your-logo.svg" alt="Your Company" className="w-full h-full object-contain" />
</div>
```

## Sponsor Tiers

- **Platinum**: Premium sponsors with highest visibility
- **Gold**: Major sponsors with prominent placement
- **Silver**: Supporting sponsors
- **Bronze**: Contributing sponsors

## Logo Requirements

- High resolution (minimum 200x200px)
- Transparent background preferred
- Clear, readable design
- Consistent with your brand guidelines

## Contact Information

For sponsorship inquiries, direct potential sponsors to the contact section or use the "BECOME A SPONSOR" button functionality.

## File Structure

```
public/
  sponsors/
    v-motors-logo.svg
    soft-suave-logo.svg
    estilo-logo.svg
    aerowheel-logo.svg
    your-logo.svg (add new logos here)

src/
  components/
    Sponsors.tsx (main sponsors component)
    Hero.tsx (hero section with sponsor showcase)
```

## Styling

Sponsor cards automatically use tier-based styling defined in `src/index.css`. Each tier has its own color scheme and visual treatment.
