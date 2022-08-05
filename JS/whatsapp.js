const whatsapp = document.querySelector("#whatsapp");
const contenido = document.querySelector("#contenido");
const close_icon = document.getElementById("close-icon");
whatsapp.addEventListener("click",function(){
    contenido.classList.toggle("aparece");
    });
    
    const button__secundary = document.querySelector(".product-button__secundary");
    const fixed = document.querySelector(".container-fixed");
    
    button__secundary.addEventListener("click",function(){
        fixed.classList.add("translate");
    });


close_icon.addEventListener("click",function(){
    fixed.classList.remove("translate");
})