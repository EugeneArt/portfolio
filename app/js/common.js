$(document).ready(function() {
	function determineHeigh() {
        $(".main_head").css("height", $(window).height());
    }
    $(".section_header").animated("fadeInUp","fadeOutDown");
    $(".animation_1").animated("flipInY","flipOutY");
    $(".animation_2").animated("fadeInLeft","fadeOutLeft");
    $(".animation_3").animated("fadeInRight","fadeOutRight");


    $("#portfolio_grid").mixItUp();


    $(".s_portfolio li").click(function () {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type:'image'});
    $(".popup_content").magnificPopup({type: 'inline', midClick: true});

	determineHeigh()
    $(window).resize(function () {
		determineHeigh();
    })

    $(".portfolio_item").each(function (item) {
        $(this).find("a").attr("href", "#work_" + item);
        $(this).find(".portfolio_description").attr("id", "work_" + item);
    });

    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

    $(".top_menu ul a").mPageScroll2id();
	
});

$(window).load(function() {
    $(".loaderInner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

$(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");

    if ($(".top_menu").is(":visible")) {
        $(".top_menu").fadeOut(600);
        $(".top_menu li a").removeClass("fadeInUp animated");
    } else {
        $(".top_menu").fadeIn(600);
        $(".top_menu li a").addClass("fadeInUp animated")
    }
});

$(".menu_item").click(function () {
    $(".top_menu").fadeOut(600);
    $(".sandwich").removeClass("active");
});

