# DemonHacks Testing Suite

Automated end-to-end tests using Playwright to ensure all features work correctly.

## Test Coverage

### 1. **Registration Tests** (`tests/register.spec.ts`)
- ✅ Page loads successfully
- ✅ Tally form iframe displays correctly
- ✅ Fallback link works when JavaScript is disabled
- ✅ Contact information is visible
- ✅ Mobile responsiveness

### 2. **Homepage Tests** (`tests/homepage.spec.ts`)
- ✅ Hero section with mascot and CTAs
- ✅ All main sections visible (What is DemonHacks, Quick Facts, Ready to Hack)
- ✅ Navigation links work
- ✅ Quick Facts cards display correctly
- ✅ Mobile responsiveness

### 3. **Navigation Tests** (`tests/navigation.spec.ts`)
- ✅ All header navigation links
- ✅ Footer links and contact info
- ✅ Logo and branding
- ✅ Page-to-page navigation

### 4. **Animation Tests** (`tests/animations.spec.ts`)
- ✅ Floating power-ups background elements
- ✅ Hero title typewriter effect
- ✅ Animated CTA buttons
- ✅ Mario-themed decorations (hills, pipes, bricks)
- ✅ Respects `prefers-reduced-motion`

## Running Tests

```bash
# Run all tests (headless)
npm test

# Run tests with UI (visual mode)
npm run test:ui

# Run tests with browser visible
npm run test:headed

# Debug tests (step-by-step)
npm run test:debug

# View test report
npm run test:report
```

## Test Configuration

Tests run on:
- ✅ Desktop Chrome
- ✅ Desktop Firefox
- ✅ Desktop Safari (WebKit)
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)

## CI/CD Integration

Tests will automatically run on:
- Every pull request
- Before deployment to production
- Scheduled daily runs (coming soon)

## Writing New Tests

When adding new features, add corresponding tests:

```typescript
import { test, expect } from '@playwright/test';

test('my new feature works', async ({ page }) => {
  await page.goto('/my-page');
  
  // Your test assertions
  await expect(page.getByText('Something')).toBeVisible();
});
```

## Troubleshooting

**Tests failing locally?**
1. Make sure dev server is running: `npm run dev`
2. Clear Playwright cache: `npx playwright install --force`
3. Check browser console for errors

**Need to update snapshots?**
```bash
npm run test -- --update-snapshots
```

## Coverage

Current test coverage: **73 tests** across 4 suites

All critical user paths are tested to prevent regressions.
