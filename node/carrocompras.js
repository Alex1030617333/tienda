
   


let mensajetienda  = document.getElementById("titulo")

setTimeout(() => {
    mensajetienda.innerText="Tienda en linea "
    new TypeIt("#mensaje1", {
        strings:  "Compra hoy y lleva un descuento",
   }).go();
 
}, 2600);
let navegador =document.getElementById("navegador")
setTimeout(() => {
    
    mensajetienda.style.display="none"

    
let paisage5 = document.getElementById("paisage5")
paisage5.src ="imagen/noche.jpg"

let paisage6 = document.getElementById("paisage6")
paisage6.src ="imagen/paisage6.jpg"


let imagen8 = document.getElementById("imagen8")
imagen8.src ="imagen/imagen8.jpg"

let imagen6 = document.getElementById("imagen6")
imagen6.src ="imagen/imagen6.jpg"


let imagen7 = document.querySelector(".login")
imagen7.src ="imagen/imagen7.jpg"

}, 9000);

let conteo1= document.getElementById("conteo1")
let canti = document.getElementById("canti")
let contar = 0
conteo.addEventListener("click",()=>{
    
contar++
canti.innerText= contar
})

 




// async function s() {
// let s= await fetch("",{

// })
// }
// s()
