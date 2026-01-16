import { test, expect } from '@playwright/test';

test.describe('Registration Page', () => {
    test('should load registration page successfully', async ({ page }) => {
        await page.goto('/register');

        // Check page title
        await expect(page).toHaveTitle(/Register.*DemonHacks/);

        // Check main heading
        const heading = page.getByRole('heading', { name: /Register for DemonHacks/i });
        await expect(heading).toBeVisible();
    });

    test('should display Tally form iframe', async ({ page }) => {
        await page.goto('/register');

        // Wait for and check Tally iframe
        const iframe = page.locator('iframe[data-tally-src]');
        await expect(iframe).toBeVisible({ timeout: 10000 });

        // Verify iframe has correct attributes
        const src = await iframe.getAttribute('data-tally-src');
        expect(src).toContain('tally.so');
        expect(src).toContain('mORqVR'); // Your form ID
    });

    test('should show fallback link when JavaScript is disabled', async ({ browser }) => {
        // Create a new context with JavaScript disabled
        const context = await browser.newContext({ javaScriptEnabled: false });
        const page = await context.newPage();

        await page.goto('/register');

        // Check for noscript fallback
        const fallbackLink = page.getByRole('link', { name: /Open Registration Form/i });
        await expect(fallbackLink).toBeVisible();

        // Verify link goes to Tally
        const href = await fallbackLink.getAttribute('href');
        expect(href).toContain('tally.so');

        await context.close();
    });

    test('should display contact information', async ({ page }) => {
        await page.goto('/register');

        // Check for email link
        const emailLink = page.getByRole('link', { name: /deltaupe@cdm.depaul.edu/i });
        await expect(emailLink).toBeVisible();
        expect(await emailLink.getAttribute('href')).toBe('mailto:deltaupe@cdm.depaul.edu');
    });

    test('should be responsive on mobile', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/register');

        // Verify page is still accessible
        const heading = page.getByRole('heading', { name: /Register for DemonHacks/i });
        await expect(heading).toBeVisible();

        // Iframe should still be visible
        const iframe = page.locator('iframe[data-tally-src]');
        await expect(iframe).toBeVisible();
    });
});
