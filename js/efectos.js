$(function () {
// EFECTO NAV-BAR--------------------------------------
    $(".nav-menu a").each(function (index, elemento) {
        // element == this
        $(this).css({
            "top": "-200px"
        });
        $(this).animate(({
            "top": "0"
        }), 2000 + (index * 500));
    });

// EFECTO TITULO
    if ($(window).width() > 800 ){
        $("header .titulo").css({
            "opacity": "0",
            "marginTop": "0"
        });
        $("header .titulo").animate({
            "opacity": "1",
            "marginTop": "-52px"
        }, 1500);
    }
// EFECTO SCROLL NAV-BAR
    let acercaDe = $("#acerca-de").offset().top,
        menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    $("#btn-acerca-de").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acercaDe - 400
        }, 800)
    });
    $("#btn-menu").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: menu
        }, 800)
    });
    $("#btn-galeria").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria
        }, 800)
    });
    $("#btn-ubicacion").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion +50
        }, 800)
    });
});