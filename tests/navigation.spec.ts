import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');

    // Wait for nav to be visible
    await page.waitForSelector('nav');

    // Check all nav links exist in the header navigation
    const nav = page.locator('nav');
    await expect(nav.getByRole('link', { name: /^Home$/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /^Register$/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /^FAQ$/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /^Sponsors$/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /^Schedule$/i })).toBeVisible();
  });

  test('should navigate to FAQ page', async ({ page }) => {
    await page.goto('/');

    // Click FAQ link and wait for navigation
    await page.click('a[href="/faq"]');
    await page.waitForURL('**/faq');

    // Verify we're on the FAQ page
    await expect(page).toHaveURL(/\/faq/);
  });

  test('should navigate to Schedule page', async ({ page }) => {
    await page.goto('/');

    // Click Schedule link and wait for navigation
    await page.click('a[href="/schedule"]');
    await page.waitForURL('**/schedule');

    // Verify we're on the Schedule page
    await expect(page).toHaveURL(/\/schedule/);
  });

  test('should navigate to Sponsors page', async ({ page }) => {
    await page.goto('/');

    // Click Sponsors link and wait for navigation  
    await page.click('a[href="/sponsors"]');
    await page.waitForURL('**/sponsors');

    // Verify we're on the Sponsors page
    await expect(page).toHaveURL(/\/sponsors/);
  });

  test('should display logo and branding', async ({ page }) => {
    await page.goto('/');

    // Check for DEMONHACKS text
    const logoText = page.getByText(/DEMONHACKS/).first();
    await expect(logoText).toBeVisible();

    // Check for DEPAUL UNIVERSITY subtext
    const universityText = page.getByText(/DEPAUL UNIVERSITY/).first();
    await expect(universityText).toBeVisible();
  });

  test('should have footer with links', async ({ page }) => {
    await page.goto('/');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait a bit for scroll
    await page.waitForTimeout(500);

    // Check footer sections exist
    const footer = page.locator('footer');
    await expect(footer.getByText(/Quick Links/i)).toBeVisible();
    await expect(footer.getByText(/Contact/i)).toBeVisible();

    // Check email link in footer
    const footerEmailLink = footer.getByRole('link', { name: /deltaupe@cdm.depaul.edu/i });
    await expect(footerEmailLink).toBeVisible();
  });
});
