import { test } from '@playwright/test';
import { EmailUtils } from './utils/EmailUtils'
import * as signUpPage from './pages/SignUp'
import * as loginPage from './pages/Login'

test('Sign up', async ({page})=>{
    const emailUtils = new EmailUtils()
    const inbox = await emailUtils.createInbox();

    await page.goto('/signup')

    await signUpPage.signUp(page, inbox.emailAddress)

    const email = await emailUtils.waitForLatestEmail(inbox.id)
    
    // get the code\ from the email body:
    const code = /([0-9]{6})$/.exec(email?.body!)![1];

    await signUpPage.addConfirmationCode(page, code)

    await loginPage.login(page, inbox.emailAddress, signUpPage.signUpData.pass)




})