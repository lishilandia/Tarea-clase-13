$("body").prepend(`<div id="barras" class="flex-container">
      <div id="morado" class="barra"></div>
      <div id="rojo" class="barra"></div>
      <div id="amarillo" class="barra"></div>
      <div id="cafe" class="barra"></div>
      <div class="barra"></div>
    </div>`);

    $("#morado").slideDown("4000");
    $("#rojo").slideUp("12000");
$("#amarillo").toggle("10000");
$("#cafe").css("color", "brown")
        .slideUp(8000)
  .slideDown(14000)
  .delay(2000)

        



$("body").prepend('<h3  style="display: none" >ESTAS SON LAS BARRAS ANIMADAS</h3>');
$("h3").css({
  "color": "green",
  "fontsize": "20px"
})

$("h3").fadeIn(3000);
$("h3").fadeOut(7000);


$("body").prepend('<p class="titulo">Tarea Clase 13</p>');

$("p").css("background-color", "pink");
$("p").css("width", "150px");
$("p").css("heigth", "150px");
$(".titulo").css({  "color": "white", 
                    "font-size": "40px", 
  "border-radius": "5px",
});
