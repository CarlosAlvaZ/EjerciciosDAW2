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
let inputVal = "0"
let labelVal = "0"
let result = "0"
let currentOperation = undefined

function focus(){
    input.focus()
}

function print(){
    if(inputVal.toString().endsWith(".")){
        input.value = inputVal.toString().slice(0,-1)
    }else{
        label.innerHTML = labelVal
        input.value = inputVal
    }
}

function displace(){
    labelVal = inputVal
    inputVal = "0"
    print()
}

function modulusF(dividendo, divisor){
    currentOperation = undefined
    return dividendo % divisor
}

function sqrtF(radicando){
    currentOperation = undefined
    return Math.sqrt(radicando)
}

function inverseF(num){
    currentOperation = undefined
    return 1 / num
}

function squareF(base){
    currentOperation = undefined
    return base**2
}

function divisionF(dividendo, divisor){
    if(divisor != 0){
        currentOperation = undefined
        return dividendo / divisor
    }
    return NaN
}

function multiplicationF(factor1, factor2){
    currentOperation = undefined
    return factor1 * factor2
}

function substractionF(minuendo, sustraendo){
    currentOperation = undefined
    return minuendo - sustraendo
}

function additionF(sumando1, sumando2){
    currentOperation = undefined
    return sumando1 + sumando2
}

function equalF(){
    currentOperation = undefined
    labelVal = result
    inputVal = 0
    print()
}

function evalOperation(){
    console.log(currentOperation)
    if(currentOperation === undefined){
        return
    }
    result = eval(currentOperation + `(${labelVal}, ${inputVal})`)
    equalF()
    focus()
}

function validation(operation){
    if(labelVal == "0"){
        currentOperation = operation
        displace()
        focus()
        return
    }else if(inputVal == "0"){
        currentOperation = operation
        focus()
        return
    }
    evalOperation()
    currentOperation = operation
}

print()
focus()

numbers.forEach(number=>{
    number.addEventListener('click', (e)=>{
        if(inputVal == "0"){
            inputVal = e.target.dataset.number.toString()
            print()
            focus()
        }else{
            inputVal = inputVal.toString() + e.target.dataset.number.toString()
            print()
            focus()
        }
    })
})

point.addEventListener('click', ()=>{
    if(inputVal.toString().includes(".")){
        focus()
        return
    }
    inputVal = inputVal.toString() + "."
    print()
    focus()
})

backspace.addEventListener('click', ()=>{
    if(inputVal != "0"){
        inputVal = inputVal.toString().slice(0,-1)
        print()
        focus()
    }else{
        inputVal = "0"
        print()
        focus()
    }
})

clearE.addEventListener('click', ()=>{
    inputVal = "0"
    labelVal = "0"
    result = "0"
    print()
    focus()
})

clear.addEventListener('click', ()=>{
    inputVal = 0
    print()
    focus()
})

modulus.addEventListener('click', ()=>{
    validation("modulusF")
})

sqrt.addEventListener('click', ()=>{
    if(inputVal == "0"){
        focus()
        return
    }
    result = sqrtF(parseFloat(inputVal))
    equalF()
    focus()
})

inverse.addEventListener('click', ()=>{
    if(inputVal == "0"){
        focus()
        return
    }
    result = inverseF(parseFloat(inputVal))
    equalF()
    focus()
})

square.addEventListener('click', ()=>{
    if(inputVal == "0"){
        focus()
        return
    }
    result = squareF(parseFloat(inputVal))
    equalF()
    focus()
})

division.addEventListener('click', ()=>{
    validation("divisionF")
})

multiplication.addEventListener('click', ()=>{
    validation("multiplicationF")
})

substraction.addEventListener('click', ()=>{
    validation("substractionF")
})

addition.addEventListener('click', ()=>{
    validation("additionF")
})

equal.addEventListener('click', ()=>{
    evalOperation()
})