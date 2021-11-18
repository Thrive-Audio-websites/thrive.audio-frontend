function scroll_to_products() {
    //document.getElementById("test").scrollIntoView(true);
    //window.scroll({top:895, behavior: 'smooth'})
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.scrollBy(0, document.getElementById("first-product").getBoundingClientRect().top-150);
    } else {
        window.scrollBy(0, document.getElementById("first-product").getBoundingClientRect().top-60);
    }
    console.log(document.getElementById("first-product").getBoundingClientRect().top);
}

let menu_background = document.getElementById("menu-background");
let menu = document.getElementById("menu")
let menu_button = document.getElementById("menu-button")

function menu_toggle() {
    if (menu.classList.contains("menu-expanded")) {
        menu.classList.remove("menu-expanded")
        menu_background.classList.remove("mobile-menu-button-background-expanded")
        menu_button.setAttribute("src", "images/menu_button.png")
        menu_button.classList.remove("mobile-menu-button-expanded")
    } else {
        menu.classList.add("menu-expanded")
        menu_background.classList.add("mobile-menu-button-background-expanded")
        menu_button.setAttribute("src", "images/menu_button_close.png")
        menu_button.classList.add("mobile-menu-button-expanded")
    }
}

window.onscroll = function () {scroll_events()};

function scroll_events() {
    let button = document.getElementById("up_button");
    let top = document.getElementById("button-pop_up");
    let topY = top.offsetTop;
    if (window.pageYOffset > topY) {
        button.classList.remove("button-hide");
    } else {
        button.classList.add("button-hide");
    }

    let menu_background = document.getElementById("menu-background");
    if (window.pageYOffset > 0) {
        menu_background.classList.add("menu-background-blur");
    } else {
        menu_background.classList.remove("menu-background-blur");
    }

    let arrow = document.getElementById("down-arrow");
    if (window.pageYOffset > 100) {
        arrow.classList.add("down-arrow-hidden")
    }
}