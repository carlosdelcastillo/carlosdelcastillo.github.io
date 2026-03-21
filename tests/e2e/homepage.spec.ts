import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should redirect root to english route by default', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/en\/$/);
  });

  test('should redirect root to spanish route for spanish browsers', async ({
    browser,
  }) => {
    const context = await browser.newContext({
      locale: 'es-ES',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      },
    });
    const page = await context.newPage();

    await page.goto('/');
    await expect(page).toHaveURL(/\/es\/$/);

    await context.close();
  });

  test('should load and display main sections', async ({ page }) => {
    await page.goto('/en/');
    
    // Check if the main navigation is present
    await expect(page.getByRole('navigation').first()).toBeVisible();
    
    // Check if hero section is present
    await expect(page.locator('section').first()).toBeVisible();
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Carlos del Castillo/);
  });

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/en/');
    
    // Click on About link
    await page.getByRole('link', { name: 'About' }).first().click();
    
    // Wait for scroll and check if about section is visible
    await page.waitForTimeout(1000);
    await expect(page.locator('#about')).toBeVisible();
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/en/');
    
    // Find theme toggle buttons
    const darkModeButton = page.locator('[title*="Dark"]').first();
    
    if (await darkModeButton.isVisible()) {
      await darkModeButton.click();
      
      // Check if dark mode is applied
      await expect(page.locator('html')).toHaveClass(/dark/);
    }
  });

  test('should toggle language', async ({ page }) => {
    await page.goto('/en/');
    
    // Find Spanish language button
    const esButton = page.getByRole('button', { name: 'ES' }).first();
    
    if (await esButton.isVisible()) {
      await esButton.click();
      
      // Check route and content are both Spanish
      await expect(page).toHaveURL(/\/es\/$/);
      await expect(page.locator('text="Soy Carlos del Castillo"')).toBeVisible();
    }
  });
});

test.describe('Contact Links', () => {
  test('should have working external links', async ({ page }) => {
    await page.goto('/en/');
    
    // Check GitHub link
    const githubLink = page.locator('a[href*="github.com"]').first();
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check LinkedIn link
    const linkedinLink = page.locator('a[href*="linkedin.com"]').first();
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en/');
    
    // Check if mobile navigation works
    const mobileMenuButton = page
      .getByRole('button')
      .filter({ has: page.locator('svg') })
      .first();
    
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible();
    }
  });

  test('should work on tablet devices', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/en/');
    
    // Check if the layout adapts properly
    await expect(page.getByRole('navigation').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });
});
