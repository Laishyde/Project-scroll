window.onscroll = function () { changeImage() }

function changeImage() {
    var scroll = window.scrollY + (window.innerHeight / 3);

    [...document.getElementsByClassName('section')].forEach(el => {
        el.classList.remove('active');

        if (el.offsetTop <= scroll && el.offsetTop + el.offsetHeight > scroll) {
            el.classList.add('active');
        }
    })
} changeImage();