document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

var topBtn = document.getElementById('topBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

ScrollReveal().reveal('.presentation-cards');
ScrollReveal().reveal('.new-product');
ScrollReveal().reveal('.new-product-cards');
ScrollReveal().reveal('.product-cards');