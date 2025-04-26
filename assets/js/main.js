

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#btn1').click(function(){
    alert("El correo fue enviado correctamente...")
})

$('#btn2').click(function(){
    alert("Añadido a favoritos :) ")
})

$('#btnnews1').click(function(){
    alert("Gracias por suscribirte a nuestro Newsletter")
})
$('#btnnews2').click(function(){
    alert("Gracias por suscribirte a nuestro Newsletter")
})


$('#cc1').on('dblclick', changeColor);
$('#cc2').on('dblclick', changeColor);

function changeColor(){
    var tColor = $(this).css("color");
     if (tColor == "rgb(33, 37, 41)"){
        $(this).css('color', 'red')
    }
    else{
        $(this).css('color', 'black')
    } 
        
}


/* 

$('idseccion').click(function(){
    $('idseccion').toggle()
}) */