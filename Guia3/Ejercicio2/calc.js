const input = document.querySelector("#input")
const label = document.querySelector("#label")
const numbers = document.querySelectorAll(".number")
const backspace = document.querySelector(".backspaceButton")
const clearE = document.querySelector(".clearEbutton")
const clear = document.querySelector(".clearbutton")
const modulus = document.querySelector(".modulus")
const sqrt = document.querySelector(".sqrt")
const inverse = document.querySelector(".inverse")
const square = document.querySelector(".square")
const division = document.querySelector(".division")
const multiplication = document.querySelector(".multiplication")
const substraction = document.querySelector(".substraction")
const addition = document.querySelector(".addition")
const point = document.querySelector(".point")
const equal = document.querySelector(".equal")

function focus(){
    input.focus()
}

focus()

numbers.forEach(number=>{
    number.addEventListener('click', (e)=>{
        input.value+= e.target.dataset.number
        focus()
    })
})

backspace.addEventListener('click', ()=>{
    let aux = [...input.value]
    if(aux.length != 0 && aux.length != 1){
        aux.pop()
        input.value = parseFloat(aux.join(""))
    }else{
        input.value = ""
        focus()
    }
})

clearE.addEventListener('click', ()=>{
    input.value = ""
    label.innerHTML = 0
    focus()
})

clear.addEventListener('click', ()=>{
    input.value = ""
    focus()
})