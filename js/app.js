(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    var btns = document.getElementsByClassName("icon-menu");
    var par = document.getElementsByClassName("header__menu");
    var body = document.body;
    btns[0].onclick = function() {
        par[0].classList.toggle("header__menu_active");
        body.classList.toggle("lock");
    };
    new Swiper(".reviews__slider", {
        loop: true,
        speed: 1e3,
        draggable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    window["FLS"] = true;
    isWebp();
})();