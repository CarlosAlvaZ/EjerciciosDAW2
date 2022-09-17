// Declarando las referencias a los elementos HTML

const enlaces = document.querySelectorAll(".enlace")
const prompt = document.querySelector(".prompt")
const buttons = document.querySelector(".buttons")
const confirm = document.querySelector(".confirm")
const cancelEl = document.querySelector(".cancel")
const close = document.querySelector(".close")

function openTab(url){
    newTab = window.open(url, "_blank")
}

enlaces.forEach((enlace)=>{
    enlace.addEventListener('click', async (e)=>{
        e.preventDefault()
        prompt.classList.toggle('hidden')
        confirm.addEventListener('click', ()=>{
            prompt.classList.toggle("hidden")
            openTab(e.target.href)
        })
    })
})

close.addEventListener('click', ()=>{
    prompt.classList.toggle('hidden')
})
cancelEl.addEventListener('click', ()=>{
    prompt.classList.toggle("hidden")
})