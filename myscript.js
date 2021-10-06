function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}

$(document).ready(function () {
    init();
    AOS.init();


    $('#setAnonymous').change(function () {
        if (this.checked) {
            $('#sender_name').attr('disabled', 'disabled')
        } else {
            $('#sender_name').removeAttr('disabled')
        }
    });


    !function (s) {
        "use strict";

        var o, r, l = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        });
        if (s(".fancybox").length && s(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        }), s(".popup-gallery").length && s(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function (e) {
                    return e.is("img") ? e : e.find("img")
                }
            }
        }), s(".popup-image").length && s(".popup-image").magnificPopup({
            type: "image",
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function (e) {
                    return e.is("img") ? e : e.find("img")
                }
            }
        }), function () {
            if (s(".sortable-gallery .gallery-filters").length) {
                var i = s(".gallery-container");
                i.isotope({
                    filter: "*",
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), s(".gallery-filters li a").on("click", function () {
                    s(".gallery-filters li .current").removeClass("current"), s(this).addClass("current");
                    var e = s(this).attr("data-filter");
                    return i.isotope({
                        filter: e,
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: !1
                        }
                    }), !1
                })
            }
        }(), s(".site-header .navigation").length && (o = s(".site-header .navigation"), r = "sticky-header", o.addClass("original").clone().insertAfter(o).addClass(r).removeClass("original")), s("#clock").length && s("#clock").countdown("2031/07/29 19:00:00", function (e) {
            s(this).html(e.strftime('<div class="box"><div>%D</div> <span>Hari</span> </div><div class="box"><div>%H</div> <span>Jam</span> </div><div class="box"><div>%M</div> <span>Menit</span> </div><div class="box"><div>%S</div> <span>Detik</span> </div>'))
        }), s(".gallery-slider".length) && s(".gallery-slider").owlCarousel({
            mouseDrag: !1,
            smartSpeed: 500,
            nav: !0,
            navText: ["PREV", "/ &nbsp; NEXT"],
            dots: !1,
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), s(".music-box").length) {
        }
        s(window).on("load", function () {
            s(".preloader").length && s(".preloader").delay(10).fadeOut(50, function () {
                l.init()
            }), s(".hero-slider .slide").length && s(".hero-slider .slide").each(function () {
                var e = s(this),
                    i = e.find(".slider-bg").attr("src");
                e.css({
                    backgroundImage: "url(" + i + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            })
        }), s(window).on("scroll", function () {
            s(".site-header").length && function (e, i) {
                if (300 <= s(window).scrollTop()) {
                    var n = s(".original"),
                        t = (n.offset().left, n.css("width"));
                    e.addClass(i), e.css({
                        width: t
                    }).show(), s(".original").css({
                        visibility: "hidden"
                    })
                } else s(".original").css({
                    visibility: "visible"
                }), e.removeClass(i)
            }(s(".sticky-header"), "sticky-on", s(".site-header .navigation").offset().top),
                function (e) {
                    var i = s(window).scrollTop(),
                        n = (s(window).height(), s(document).height(), i + 2),
                        t = s("section"),
                        a = e,
                        o = a.outerHeight();
                    t.each(function () {
                        var e = s(this).offset().top - o,
                            i = e + s(this).outerHeight();
                        e <= n && n <= i ? (a.find("> ul > li > a").parent().removeClass("current-menu-item"), a.find("a[href='#" + s(this).attr("id") + "']").parent().addClass("current-menu-item")) : 2 === n && a.find("> ul > li > a").parent().removeClass("current-menu-item")
                    })
                }(s(".navigation-holder"))
        }), s(window).on("resize", function () {
            clearTimeout(s.data(this, "resizeTimer")), s.data(this, "resizeTimer", setTimeout(function () {
            }, 200))
        })
    }(window.jQuery);

    particlesJS.load('hero-circle', "https://asade.inveet.id/themes/assets/particle.json", function () {
        console.log('particle start')
    })
});

$(document).bind("contextmenu", function (e) {
    return false;
});