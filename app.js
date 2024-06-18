
//creating scroll reveal effect
ScrollReveal({ 
    // reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.header__wrap .image, .access p', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.header__wrap h1, .track__container h2, .cta__box h2, .cta__box p, .track__img img, .footer__wrap img ', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.header__wrap p, .track__container p', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.header__wrap .btn__wrap a', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.quick__srch, .icloud, .history', {delay: 800, origin: 'right', interval: 200});
ScrollReveal().reveal('.access h2', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.access__img img', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.blacklist, .plain_text, .eye, .social__icons i', {delay: 550, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.logo img', {delay: 600, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.btn__wrap .btn__ios', {delay: 800, origin: 'left' });
ScrollReveal().reveal('.btn__wrap .btn__mac', {delay: 800, origin: 'right'});

