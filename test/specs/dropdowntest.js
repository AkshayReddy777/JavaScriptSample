import dropdownpage from '../pageobjects/dropdownpage.js'

describe('dropdownpage test', async()=>{

it('option1 test', async()=>{
    await browser.url("https://the-internet.herokuapp.com/dropdown")
    await (await dropdownpage.dropdownmenu).click()
    await dropdownpage.dropdownmenu.selectByVisibleText("Option 1")
    await expect((await dropdownpage.dropdownmenu).getValue()).toBe("Option 1")
})

it('option2 test', async()=>{
    await browser.url("https://the-internet.herokuapp.com/dropdown")
    await (await dropdownpage.dropdownmenu).click()
    await dropdownpage.dropdownmenu.selectByVisibleText("Option 2")
    await expect((await dropdownpage.dropdownmenu).getValue()).toBe("Option 2")
})


})