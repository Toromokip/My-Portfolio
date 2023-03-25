/* change mode(dark/light) function */

let changeMode = function(icon) {
    icon.classList.toggle('fa-moon');
    document.body.classList.toggle('darkmode');
}

/* show menu function */
let menuItems = document.querySelector(".navbar");

menuItems.style.right = "-200px";

function menuDisplay(){
    if (menuItems.style.right == "-200px"){
        menuItems.style.right = "0px";
    }
    else {
        menuItems.style.right = "-200px";
    }
}


/* scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});