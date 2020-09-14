//Select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
})

//ibg//
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
origin: 'left',
duration:2000,
distance: '25rem',
delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration:2000,
    distance: '25rem',
    delay: 600
    });

sr.reveal('.animate-top',{
        origin: 'top',
        duration:2000,
        distance: '25rem',
        delay: 600
        });

sr.reveal('.animate-bottom',{
        origin: 'bottom',
        duration:2000,
        distance: '25rem',
        delay: 600
        });