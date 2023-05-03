let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menubar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menubar.classList.remove('fa-times')
    navbar.classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centerslides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});