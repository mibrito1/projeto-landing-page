


let form = document.querySelector(".formulario")

let nome = document.getElementById("nome")
let sex = document.getElementById("sex")
let area = document.getElementById("area")
let email = document.getElementById("email")

console.log(sex)

form.addEventListener("submit",function(event){
    
    alert(`Muito obrigada pela confiança! Entraremos em contato através do 
    e-mail ${email.value}`)
    event.preventDefault()

nome.value= ""
sex.value=""
area.value=""
email.value=""
})


