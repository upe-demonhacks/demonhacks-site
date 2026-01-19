import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
    test('should load homepage successfully', async ({ page }) => {
        await page.goto('/');

        // Check title
        await expect(page).toHaveTitle(/DemonHacks.*UPE Hackathon/);

        // Check main heading
        const heading = page.getByRole('heading', { name: /Demonhacks/i, level: 1 });
        await expect(heading).toBeVisible();
    });

    test('should display hero section with all elements', async ({ page }) => {
        await page.goto('/');

        // Check UPE Presents text
        await expect(page.getByText(/UPE Presents/i)).toBeVisible();

        // Check description
        await expect(page.getByText(/student-run hackathon/i)).toBeVisible();

        // Check CTA buttons
        const registerBtn = page.getByRole('link', { name: /Register now/i }).first();
        await expect(registerBtn).toBeVisible();

        const sponsorBtn = page.getByRole('link', { name: /Become a sponsor/i }).first();
        await expect(sponsorBtn).toBeVisible();

        // Check mascot image
        const mascot = page.locator('img[alt*="Blue Demon"]');
        await expect(mascot).toBeVisible();
    });

    test('should have working navigation links', async ({ page }) => {
        await page.goto('/');

        // Test navigation to Register
        const registerLink = page.getByRole('link', { name: /Register now/i }).first();
        await registerLink.click();
        await expect(page).toHaveURL(/\/register/);

        // Go back home
        await page.goto('/');

        // Test navigation to Sponsors
        const sponsorLink = page.getByRole('link', { name: /Sponsors/i }).first();
        await sponsorLink.click();
        await expect(page).toHaveURL(/\/sponsors/);
    });

    test('should display all main sections', async ({ page }) => {
        await page.goto('/');

        // What is DemonHacks section
        await expect(page.getByRole('heading', { name: /What is DemonHacks/i })).toBeVisible();

        // Quick Facts section
        await expect(page.getByRole('heading', { name: /Quick Facts/i })).toBeVisible();

        // Ready to Hack section
        await expect(page.getByRole('heading', { name: /Ready to Hack/i })).toBeVisible();
    });

    test('should display Quick Facts cards', async ({ page }) => {
        await page.goto('/');

        // Check for all three cards
        await expect(page.getByRole('heading', { name: /Build/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /Learn/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /Connect/i })).toBeVisible();

        // Check card content
        await expect(page.getByText(/24 hours to create/i)).toBeVisible();
        await expect(page.getByText(/Workshops, mentors/i)).toBeVisible();
        await expect(page.getByText(/Network with students/i)).toBeVisible();
    });

    test('should be responsive on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Check main elements are still visible
        await expect(page.getByRole('heading', { name: /Demonhacks/i, level: 1 })).toBeVisible();
        await expect(page.getByText(/Register now/i)).toBeVisible();

        // Quick Facts should stack vertically on mobile
        const quickFactsSection = page.locator('section').filter({ hasText: /Quick Facts/ });
        await expect(quickFactsSection).toBeVisible();
    });
});
