$(document).ready(function() {
	function determineHeigh() {
        $(".main_head").css("height", $(window).height());
    }

	determineHeigh()
    $(window).resize(function () {
		determineHeigh();
    })
	
});

$(window).load(function() {
    $(".loaderInner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

$(".sandwich, .menu_item").click(function() {
    $(".sandwich").toggleClass("active");
});
$(".menu_item").click(function () {
    $(".top_menu").fadeOut(600);
    $(".sandwich").toggleClass("active");
});

$(".toggle_menu").click(function () {
	if ($(".top_menu").is(":visible")) {
        $(".top_menu").fadeOut(600);
        $(".top_menu li a").removeClass("fadeInUp animated");
	} else {
        $(".top_menu").fadeIn(600);
        $(".top_menu li a").addClass("fadeInUp animated")
	}

});
