//counter (deluje)

(function ($) {
    "use strict";
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1;
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () { count($this); }, 50);
        }
    }
    $(".stat-count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
})(jQuery);

/*smoth scroling*/

$(document).ready(function(){
    $('.menu a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
            }
        }
    });
});

//progres bar js (deluje)//

$(document).ready(function($) {
    function animateElemets() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var precent = $(this).find('.circle').attr('data-precent');
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    value: precent / 100,
                    size: 200,
                    thickness: 15,
                    fill: {
                        color: '#f57a14'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue){
                    $(this).find('strong').text((stepValue*100).toFixed(0) + "%")
                }).stop();
            }
        });
    }

    animateElemets();
    $(window).scroll(animateElements);
});

//accordion (deluje)

$("#faq-accordion").accordion({
    collapsible : true,
    active : 0,
    heightStyle: "true",
    icons : {header:"ui-icon-plus", activeheader:"ui-icon-minus"}
});

//owl carouserl slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

/*scroll to top*/

$(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("arrow i").fadeIn();
            }
            else {
                $("arrow i").fadeOut();
            }

        });
        $("arrow i").on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

});