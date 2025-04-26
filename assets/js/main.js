

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


$('#cc1').dblclick('dblclick', changeColor);
$('#cc2').on('dblclick', changeColor);

function changeColor(){
    var tColor = $(this).css("color");
     if (tColor == 'rgb(33, 37, 41)'){
        $(this).css('color', 'rgb(255, 0, 0)')
    }
    if (tColor == 'rgb(255, 0, 0)'){
        $(this).css('color', 'rgb(33, 37, 41)')
    }        
};

$('#card1').click(function(){
    $('#imgCard1, #pCard1').toggle()
    var hCard1 = $('#receta1').css("height")
    if (hCard1 == "80px"){
        $('#receta1').css('height', '100%')
    }
    if (hCard1 != "80px"){
        $('#receta1').css('height', '80px')
    }
})

$('#card2').click(function(){
    $('#imgCard2, #pCard2').toggle()
    var hCard2 = $('#receta2').css("height")
    if (hCard2 == "80px"){
        $('#receta2').css('height', '100%')
    }

    if (hCard2 != "80px"){
        $('#receta2').css('height', '80px')
    }

});

$('#card3').click(function(){
    $('#imgCard3, #pCard3').toggle()
    var hCard3 = $('#receta3').css("height")
    if (hCard3 == "80px"){
        $('#receta3').css('height', '100%')
    }

    if (hCard3 != "80px"){
        $('#receta3').css('height', '80px')
    }

});







/* $('#card2').click(function(){
    $('#imgCard2, #pCard2').toggle()
    $('#receta2').css('height', 'auto')
});

$('#card3').click(function(){
    $('#imgCard3, #pCard3').toggle()
    $('#receta3').css('height', 'auto')
}); */