class dropdownpage{

    get dropdownmenu(){
        return $('select#dropdown')
    }

    async selectOption1(){
        await this.dropdownmenu.click()
        await this.dropdownmenu.selectByVisibleText("Option 1")
    }

    async selectOption2(){
        await this.dropdownmenu.click()
        await this.dropdownmenu.selectByVisibleText("Option 2")
    }



}

export default new dropdownpage()