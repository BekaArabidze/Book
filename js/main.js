

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


TweenMax.from('.heading-primary--main',2,{opacity:0,ease: Back.easeOut.config(1.3), x: -300 });
TweenMax.from('.heading-primary--sub',2,{opacity:0,ease: Back.easeOut.config(1.3), x: 300 });

/// Pharagraph aniamtion
TweenMax.from('.blogers_section__grid__box__paragraph',2,{opacity:0 ,ease: Back.easeOut.config(1.1), y: 100 });

// TweenMax.from('.blogers_section__grid__box__img ',2.5,{opacity:0 ,ease: Power4.easeOut, y: -500 });



