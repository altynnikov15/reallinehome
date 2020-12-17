$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $("#header").addClass("animate");
    } else {
        $("#header").removeClass("animate");
    }
});

