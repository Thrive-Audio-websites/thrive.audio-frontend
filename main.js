function scroll_to_products() {
    //document.getElementById("test").scrollIntoView(true);
    //window.scroll({top:895, behavior: 'smooth'})
    window.scrollBy(0, document.getElementById("first-product").getBoundingClientRect().top-60);
    console.log(document.getElementById("first-product").getBoundingClientRect().top);
}

window.onscroll = function () {UpButton()};

function UpButton() {
    let button = document.getElementById("up_button");
    let top = document.getElementById("button-pop_up");
    let topY = top.offsetTop;
    if (window.pageYOffset > topY) {
        button.classList.remove("button-hide");
    } else {
        button.classList.add("button-hide");
    }
}