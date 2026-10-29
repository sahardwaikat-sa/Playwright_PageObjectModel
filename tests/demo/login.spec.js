import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Pages/Login.js'
import { time } from 'node:console';

test('test', async ({ page }) => {
  const login = new LoginPage(page);


  await login.goto();
  await login.login('tomsmith', 'SuperSecretPassword!');
  time(5000)

  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
});