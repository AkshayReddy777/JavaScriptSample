class LoginPage{

    get userName(){
        return $("#username")
    }

    get password(){
        return $("#password")
    }

    get submitbtn(){
        return $("button")
    }

    get loginmsg(){
        return $("#flash")
    }

    async login(userName , password){
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.submitbtn.click();
    }



}

export default new LoginPage()

