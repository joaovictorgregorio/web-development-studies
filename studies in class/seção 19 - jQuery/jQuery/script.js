/* 

Este comando permite que o <script> no HTML possa ser adicionado no início do carregamento da página na seção <head>

$(document).ready( function() {
    $("h1").css("color", "red");
} );

*/

// $("h1").css("color", "white");
// $("h1").css("background", "black");
// console.log($("h1").css("font-size"));

// Adicionando uma classe com jQuery
// $("h1").addClass("big-title margin-50");

/*
Removendo uma classe com jQuery 
$("h1").removeClass("margin-50");
*/

/*
Verificando se o atributo do HTML tem a .class adicionado em sua estrutura 
$("h1").hasClass("margin-50");
retorno será em booleano true or false
*/

/*
$("h1").text("Olá,");
$("h1").html("Lorem ipsum<hr>");
*/

/*
$("img").attr("src", "./images/dice3.png");
$("a").attr("href", "https://www.github.com/joaovictorgregorio");
*/

$( "h1" ).click( function() {
    $( "h1" ).css( "color", "purple" )
} );
