import { test, expect } from '@playwright/test';

test.describe('Animations', () => {
    test('should display floating power-ups background', async ({ page }) => {
        await page.goto('/');

        // Check for floating powerups container
        const powerups = page.locator('.floating-powerups');
        await expect(powerups).toBeAttached();

        // Should have multiple floating elements
        const coins = powerups.locator('.coin');
        const stars = powerups.locator('.star');
        const mushrooms = powerups.locator('.mushroom');

        await expect(coins.first()).toBeVisible();
        await expect(stars.first()).toBeVisible();
        await expect(mushrooms.first()).toBeVisible();
    });

    test('should have animated hero title', async ({ page }) => {
        await page.goto('/');

        // Check for hero title with typewriter effect
        const heroTitle = page.locator('#hero-title');
        await expect(heroTitle).toBeVisible();
        await expect(heroTitle).toContainText(/Demonhacks/i);
    });

    test('should display animated CTA buttons', async ({ page }) => {
        await page.goto('/');

        // Check for buttons with animation classes
        const registerBtn = page.locator('a.btn-glow, a.animate-pulse-glow').first();
        await expect(registerBtn).toBeVisible();

        // Verify button has animation styles
        const classes = await registerBtn.getAttribute('class');
        expect(classes).toMatch(/(btn-glow|animate-pulse-glow|animate-bounce-in)/);
    });

    test('should have Mario-themed decorative elements', async ({ page }) => {
        await page.goto('/');

        // Check for green hills
        const hills = page.locator('.bg-green-500.rounded-t-full');
        await expect(hills.first()).toBeVisible();

        // Check for pipes
        await page.evaluate(() => window.scrollTo(0, 500));
        const pipes = page.locator('[class*="pipe"]').first();
        await expect(pipes).toBeVisible();

        // Check for brick ground
        const bricks = page.locator('[class*="brick"]').first();
        await expect(bricks).toBeVisible();
    });

    test('should handle reduced motion preference', async ({ browser }) => {
        // Create context with prefers-reduced-motion
        const context = await browser.newContext({
            reducedMotion: 'reduce'
        });
        const page = await context.newPage();

        await page.goto('/');

        // Page should still load correctly
        await expect(page.getByRole('heading', { name: /Demonhacks/i })).toBeVisible();

        await context.close();
    });
});
