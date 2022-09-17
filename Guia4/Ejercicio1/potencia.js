const base = document.querySelector("#base")
const exp = document.querySelector("#exp")
const button = document.querySelector("#elevar")
const target = document.querySelector("#resultTarget")

function raise(base, exponente){
    this.base = base
    this.exponente = exponente
    this.resultado = this.base ** this.exponente

    this.getResult = ()=>{ return this.resultado}

    this.print = (target)=>{
        target.innerHTML = " "
        let text = document.createTextNode(this.getResult())
        target.appendChild(text)
    }
}

button.addEventListener('click', ()=>{
    if(base.value != 0 && exp.value !=0){
        let aux = new raise(base.value, exp.value)
        aux.print(target)
    }
})