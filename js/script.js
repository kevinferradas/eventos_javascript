
// Obtener el nodo llamado "cabriolet"
// const cabriolet = document.getElementById('Cabriolet')
const cabriolet = document.querySelector('#Cabriolet')

const alquiler =document.querySelector('#alquiler')

const importe = document.querySelector('main section:nth-child(2)')

let importe_total = document.querySelector('#importe_total')



cabriolet.addEventListener("click", () => {

    let dias = prompt("¿Días de alquiler?")
    let precio = cabriolet.querySelector('ul li:last-child').textContent
    precio = precio.split('€')[0]
    // alert(precio)
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precio)*parseInt(dias)
    let mensajeUsuario = `${dias} dias de alquiler x ${precio}€/día = <span class='bold'> ${alquilerTotal.toFixed(2)}€ <span>`
    alquiler.innerHTML = mensajeUsuario
    
} )

let mensajeUsuario=""
let totalAbsoluto = 0
function alquilerVehiculo(precioDia) {
    let dias = prompt("¿Días de alquiler?")
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precioDia)*parseInt(dias)
    // sumamos cada alquiler para obtener el total
    totalAbsoluto += alquilerTotal
    // Vamos añadiendo los párrafos de cada alquiler
    mensajeUsuario += `<p>${dias} dias de alquiler x ${precioDia}€/día = <span class='bold'> ${alquilerTotal.toFixed(2)}€ <span> </p>`
    // Aquí ponemos el total en un p
    mensajeTotal = `<p>Importe total = ${totalAbsoluto} €</p>`
    alquiler.innerHTML = mensajeUsuario + mensajeTotal


}
