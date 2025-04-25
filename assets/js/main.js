

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#btn1').click(function(){
    alert("El correo fue enviado correctamente...")
})

$('#btn2').click(function(){
    alert("Añadido a favoritos :) ")
})