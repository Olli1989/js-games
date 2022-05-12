let code1 = Math.floor((Math.random()*9)+1)
let code2 = Math.floor((Math.random()*9)+1)
let code3 = Math.floor((Math.random()*9)+1)

let count = 0

let checkButton = document.getElementById('checkButton')
let codeInput = document.getElementsByTagName('input')

checkButton.addEventListener('click', () =>  {
    let value1,value2, value3
    let checkCodeClassName1,checkCodeClassName2,checkCodeClassName3
    let index = count *3
    let check1=true, check2=true, check3 = true

    value1 = parseInt(codeInput[index].value)
    value2 = parseInt(codeInput[index+1].value)
    value3 = parseInt(codeInput[index+2].value)

    if(checkInput(value1)){
        check1 = false
        codeInput[index].classList.add('errorInput')
    }

    if(checkInput(value2)){
        check1 = false
        codeInput[index+1].classList.add('errorInput')
    }

    if(checkInput(value3)){
        check1 = false
        codeInput[index+2].classList.add('errorInput')
    }

    if(check1 && check2 && check3){

        codeInput[index].classList.remove('errorInput')
        codeInput[index+1].classList.remove('errorInput')
        codeInput[index+2].classList.remove('errorInput')

        checkCodeClassName1=checkcode(value1 ,1)
        codeInput[index].classList.add(checkCodeClassName1)
        
        checkCodeClassName2=checkcode(value2 ,2)
        codeInput[index+1].classList.add(checkCodeClassName2)
        
        checkCodeClassName3=checkcode(value3 ,3)
        codeInput[index+2].classList.add(checkCodeClassName3)
        
        
        count++
        
        if(checkCodeClassName1 == "right" && checkCodeClassName2 == "right" && checkCodeClassName3 == "right"){
            wonDialog.showModal();
        } else if(count<7){
            document.getElementById('row'+(count+1)).classList.remove('hidden')
        }
        
        if(count >= 7){
            lostDialog.showModal()
        }
        
        
    }
        
})

const checkInput = (value) => {
    if(!value || value < 0 || value > 9||value == ""){
        return true
    } else {
        return false
    }
}

const checkcode = (value,i) => {
    if(value == code1 && i == 1 || value == code2 && i == 2 || value == code3 && i == 3){
        return "right"
    } else if(value == code1 || value == code2 || value == code3){
        return  "wrong-position"
    } else {
        return "wrong"
    }
}

