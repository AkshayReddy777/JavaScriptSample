import loginpage from '../pageobjects/loginPage.js'
describe('login page test', async()=>{

it('Login pass test', async()=> {

    await browser.url("https://the-internet.herokuapp.com/login")
    await loginpage.login("tomsmith","SuperSecretPassword!")
    console.log(await (await loginpage.loginmsg).getText())
    expect(await (await loginpage.loginmsg).getText()).toHaveTextContaining("You logged into a secure area!")
})

it('login fail test', async()=>{

    await browser.url("https://the-internet.herokuapp.com/login")
    await loginpage.login("smith","SuperSecretPassword!")
    console.log(await (await loginpage.loginmsg).getText())
    expect(await (await loginpage.loginmsg).getText()).toHaveTextContaining("Your username is incorrect!")


})





})