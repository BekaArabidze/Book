

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

TweenMax.from('.heading-primary--main',2,{opacity:0,ease: Back.easeOut.config(1.3), x: -300 });
TweenMax.from('.heading-primary--sub',2,{opacity:0,ease: Back.easeOut.config(1.3), x: 300 });
// TweenMax.from('.but',2.5,{opacity:0,ease: Back.easeOut.config(1), y: 200 });