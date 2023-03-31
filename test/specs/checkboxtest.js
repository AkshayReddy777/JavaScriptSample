import CheckBoxPage from '../pageobjects/checkboxpage.js'

describe('checkboxpage test', async()=>{

    it('checkbox1 test', async()=>{
        await browser.url("https://the-internet.herokuapp.com/checkboxes")
        await (await CheckBoxPage.checkbox1).click()
        expect((await CheckBoxPage.checkbox1).isElementSelected())
    })

    it('checkbox2 test', async()=>{
        await browser.url("https://the-internet.herokuapp.com/checkboxes")
        await (await CheckBoxPage.checkbox2).click()
        expect((await CheckBoxPage.checkbox2).isSelected())
    })


})
