
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import {executablePath} from 'puppeteer'
import loginViaGoogle from './utils/loginViaGoogle.js'
import {delay} from './utils/delay.js'
import clickOnAnswer from './utils/clickOnAnswer.js'
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: false ,executablePath: executablePath(),}).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await delay(80000)
  // await loginViaGoogle(page)
  await delay(30000)
  await page.goto('https://trailhead.salesforce.com/content/learn/modules/om-salesforce-order-management/om-get-started-order-management?trail_id=cc-implement-order-management')
  await delay(50000)
   await clickOnAnswer(page,"")
  console.log(`All done, check the screenshot. ✨`)
})
