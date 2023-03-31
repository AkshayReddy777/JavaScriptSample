class CheckBoxPage {

    get checkbox1(){
        return $("form#checkboxes > input:nth-of-type(1)")

    }
    get checkbox2(){
        return $("form#checkboxes > input:nth-of-type(2)")
    }

}

export default new CheckBoxPage()