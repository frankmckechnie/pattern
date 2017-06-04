// javascript ui funcitons 
$(function() {

    // take the content area away from pages
    $(".ckContentArea").removeClass("ckContentArea");


    $("#menu_toggle").on("click", function(e) {
        $(this).find("i").toggleClass("fa-close fa-bars");

        if ($(".sidebar")[0].style.display == "none") {
            $("#right-col").toggleClass("col-md-10 col-md-12");
            $(".sidebar").toggle("fast");
        } else {
            $(".sidebar").toggle("fast", function() {
                $("#right-col").toggleClass("col-md-10 col-md-12");
            });
        }
    });

    
    $("[data-slide]").on("click", function(e) {
        var elm = $(this);
        $(elm.data("slide")).toggle("medium", function() {
            elm.toggleClass("active");
        });
    });

    $(".close-link").on("click", function(e) {
        $(this).closest('.x_panel').parent().remove();
    });

    $(".collapse-link").on("click", function() {
        var a = $(this).closest(".x_panel"),
            b = $(this).find("i"),
            c = a.find(".x_content");
        a.attr("style") ? c.slideToggle(200, function() {
            a.removeAttr("style")
        }) : (c.slideToggle(200), a.css("height", "auto")), b.toggleClass("fa-chevron-up fa-chevron-down");
    })



    $('.btn').on('click', function(event) {
        event.preventDefault();

        var $div = $('<div/>'),
            btnOffset = $(this).offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;



        $div.addClass('btn-effect');
        var $btn = $(".btn-effect");

        $btn.css("height", $(this).height());
        $btn.css("width", $(this).height());
        $div
            .css({
                top: yPos - ($btn.height() / 2),
                left: xPos - ($btn.width() / 2),
            })
            .appendTo($(this));

        window.setTimeout(function() {
            $div.remove();
        }, 2000);
    });

});