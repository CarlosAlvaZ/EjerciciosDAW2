import Producto from "./producto.js"

const target = document.querySelector(".cuerpo")
const table = document.querySelector(".input-div")
const total = document.querySelector(".total")
const template = document.querySelector(".template-row")
const iNombre = document.querySelector("#nombre")
const iPrecio = document.querySelector("#precio")
const iCantidad = document.querySelector("#cantidad")
const add = document.querySelector(".add")
const toggler = document.querySelector(".toggler").querySelector("span")
let listaProductos = new Array()


function* idGenerator(){
    let i = 1
    while(true){
        yield i
        i++
    }
}

function printTotal(){
    let toPrint = listaProductos.reduce((sumatoria, producto)=>{ return sumatoria = parseFloat(sumatoria) + parseFloat(producto.detalle)}, 0)
    let strong = document.createElement('strong')
    console.log(toPrint)
    let text = document.createTextNode(`$ ${toPrint}`)
    strong.appendChild(text)
    total.innerHTML = ""
    total.appendChild(strong)
}

function refreshList(){
    let generador = idGenerator()
    target.innerHTML = ""
    listaProductos.forEach(producto=>{
        let fragment = template.content.cloneNode(true)
        let tId = fragment.querySelector(".id")
        let tNombre = fragment.querySelector(".nombre")
        let tPrecio = fragment.querySelector(".precio")
        let tCantidad = fragment.querySelector(".cantidad")
        let tDetalle = fragment.querySelector(".detalle")
        tId.appendChild(document.createTextNode(generador.next().value))
        tNombre.appendChild(document.createTextNode(producto.nombre))
        tPrecio.appendChild(document.createTextNode(producto.precio))
        tCantidad.appendChild(document.createTextNode(producto.cantidad))
        tDetalle.appendChild(document.createTextNode(`$ ${producto.detalle}`))
        target.appendChild(fragment)
    })
}

add.addEventListener('click', ()=>{
    if( iNombre.value =='' && (iPrecio.value == '' && iCantidad.value == '') ) { return }
    let producto = new Producto(iNombre.value, iPrecio.value, iCantidad.value)
    listaProductos.push(producto)
    iNombre.value = '', iPrecio.value = '', iCantidad.value = ''
    refreshList()
    printTotal()
})

toggler.addEventListener('click', ()=>{
    table.classList.toggle("hidden")
})