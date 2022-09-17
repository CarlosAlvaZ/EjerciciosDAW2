// Declarando las referencias a todos los elementos HTML
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

// Variables Globales
let inputVal = "0"
let labelVal = "0"
let result = "0"
let currentOperation = undefined

// Funcion para mantener activo el input
function focus(){
    input.focus()
}

// Funcion para imprimir los valores en el input y en el label
function print(){

    // Se evalua si termina en "." porque si no daria error al parsearlo
    if(inputVal.toString().endsWith(".")){
        input.value = inputVal.toString().slice(0,-1)
    }else{
        label.innerHTML = labelVal
        input.value = inputVal
    }
}

// Funcion que mueve el contenido de la etiqueta input hacia el label
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

// Funcion para mostrar el contenido de la variable result en la etiqueta label
function equalF(){
    currentOperation = undefined
    labelVal = result
    inputVal = 0
    print()
}

// Funcion para evaluar la operacion que se esta llevando a cabo para llamarla a través de eval()
function evalOperation(){
    if(currentOperation === undefined){
        return
    }
    result = eval(currentOperation + `(${labelVal}, ${inputVal})`)
    equalF()
    focus()
}

// Funcion para validar si ambos campos, tanto el label como el input, contienen información dentro de ellos
// para llamar la funcion correspondiente y obtener el resultado, caso contrario, se establece la operación 
// que se está llevando a cabo para la siguiente llamada.
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

// Inicialización de la interfaz
print()
focus()

// Añadiendo todos los event listeners a los elementos HTML
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