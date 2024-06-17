console.clear();
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, ScrollToPlugin);

//down arrow
gsap.fromTo('.down-arrow', {opacity: 0, y: -10}, {opacity: 1, y: 5, duration: 1.5, repeat: -1, ease: 'elastic.out(1, 0.3)' });

//hula hoop
gsap.to('.hula-hoop', {rotate: 360, duration: 30, repeat: -1, ease: 'none' });

//line drawing
gsap.set('.layerOpacity', { opacity: 0.1 } );
gsap.set('.pathBall', { xPercent: -50, yPercent: -50, x: 900, transformOrigin: 'center' });
gsap.set('.pathBall2', { xPercent: -50, yPercent: -50, x: 60, transformOrigin: 'center' });
gsap.set('#goggles, #crown, #services', { autoAlpha: 0 });

ScrollTrigger.matchMedia({
    '(min-width: 1601px)': function() {
        gsap.timeline({defaults: {duration: 1, ease:'none' },
            scrollTrigger: {
                trigger: '#path',
                scrub: 0,
                start: 'top 75%',
                end: 'bottom +=50%'
            }
        })
        .set('.pathBall', {autoAlpha: 1, scale: 0.5 })
        .fromTo('.pathLine', {drawSVG: '0% 0%'}, {drawSVG: '0% 100%'}, 0)
        .to('.pathBall', {motionPath: {path: '.pathLine', align: '.pathLine' }}, 0)
        .to('#goggles', { autoAlpha: 1, duration: 0.05 },0.145)
        .to('#crown', { autoAlpha: 1, duration:0.05 },0.51 );

        gsap.timeline({defaults: {duration: 1, ease:'none' },
            scrollTrigger: {
                trigger: '#path2',
                scrub: 0,
                start: 'top 500px',
                end: 'bottom +=60%'
            }
        })
        .set('.pathBall2', {autoAlpha: 1, scale: 0.5 })
        .fromTo('.pathLine2', {drawSVG: '0% 0%'}, {drawSVG: '0% 100%'}, 0)
        .to('.pathBall2', {motionPath: {path: '.pathLine2', align: '.pathLine2' }}, 0)
        .to('#services', { autoAlpha: 1, duration:0.03 },0.07 )
        .set('.pathBall2', { scale: 1 });
    },
    "(max-width: 1600px)": function() {
        gsap.timeline({defaults: {duration: 1, ease:'none' },
            scrollTrigger: {
                trigger: '#path',
                scrub: 0,
                start: 'top 75%',
                end: 'bottom +=80%'
            }
        })
        .set('.pathBall', {autoAlpha: 1, scale: 0.5 })
        .fromTo('.pathLine', {drawSVG: '0% 0%'}, {drawSVG: '0% 100%'}, 0)
        .to('.pathBall', {motionPath: {path: '.pathLine', align: '.pathLine' }}, 0)
        .to('#goggles', { autoAlpha: 1, duration: 0.05 },0.145)
        .to('#crown', { autoAlpha: 1, duration:0.05 },0.5 );

        gsap.timeline({defaults: {duration: 1, ease:'none' },
            scrollTrigger: {
                trigger: '#path2',
                scrub: 0,
                start: 'top 550px',
                end: 'bottom +=60%'
            }
        })
        .set('.pathBall2', {autoAlpha: 1, scale: 0.5 })
        .fromTo('.pathLine2', {drawSVG: '0% 0%'}, {drawSVG: '0% 100%'}, 0)
        .to('.pathBall2', {motionPath: {path: '.pathLine2', align: '.pathLine2' }}, 0)
        .to('#services', { autoAlpha: 1, duration:0.07 },0.07 )
        .set('.pathBall2', { scale: 1 });
    }
});

//sparkles
gsap.set('svg.sparkles', { autoAlpha: 0, scale: 1.5 });
var sparkles = gsap.timeline({ paused: true, ease: 'elastic.out(1, 0.3)' });
sparkles.set('svg.sparkles', { autoAlpha: 1 });
sparkles.fromTo('.red-dot', { x: -15, y: 45 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.yellow-dot', { x: -35, y: 35 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.yellow-dot-big', { x: -70, y: 30 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.red-element', { x: -45, y: 40, transformOrigin: 'center center' }, { scale: 0, x: 0, y: 0, rotate: 360 }, 'cracker' );
sparkles.fromTo('.red-dot-big', { x: -5, y: 5 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.purple-circle', { x: 10, y: 30 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.yellow-dot-2', { x: 10, y: 20 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.fromTo('.red-element-2', { x: 40, y: -40, transformOrigin: 'center center' }, { scale: 0, x: 0, y: 0, rotate: 360 }, 'cracker' );
sparkles.fromTo('.yellow-dot-3', { x: 50, y: -50 }, { scale: 0, x: 0, y: 0 }, 'cracker' );
sparkles.timeScale(0.5);

//agency callout
var welcomeTextTimeline = gsap.timeline({ repeat: -1 });
welcomeTextTimeline.to('#welcomeText1', { duration: 1, autoAlpha: 1, stagger: 2 }, 'welcomeAnim' );
welcomeTextTimeline.to('#welcomeText1', { duration: 1, autoAlpha: 0 }, 'welcomeAnim+=3' );
welcomeTextTimeline.to('#welcomeText2', { duration: 1, autoAlpha: 1, stagger: 2 }, 'welcomeAnim1' );
welcomeTextTimeline.to('#welcomeText2', { duration: 1, autoAlpha: 0 }, 'welcomeAnim1+=3' );


$('body').on('mousedown',function(e){
    sparkles.play(0);

    var left = e.pageX;
    var top = e.pageY;
    var widthSparkles = $('.sparkles').outerWidth() / 2;
    var heightSparkles = $('.sparkles').outerHeight() / 2;

    gsap.set('.sparkles', {
        x: left - widthSparkles,
        y: top - heightSparkles
    });
});

//dart animation
ScrollTrigger.matchMedia({
    '(min-width: 1200px)': function() {
        ScrollTrigger.create({
            trigger: '.screen-2',
            start: 'center bottom',
            toggleClass: 'active',
            onToggle: playVideoDart
        });
    },
    '(max-width: 1199px)': function() {
        ScrollTrigger.create({
            trigger: '.screen-2',
            start: 'bottom bottom',
            toggleClass: 'active',
            onToggle: playVideoDart
        });
    }
});

function playVideoDart(){
    var dartVideo = $('.screen-2 video').get(0);
    var blackCallout = $('.screen-2 .callout-black');
    setTimeout(function(){
        dartVideo.play();
        blackCallout.toggleClass('active');
    }, 1000);
}

//portfolio animation
ScrollTrigger.create({
    trigger: '.screen-3',
    start: 'center bottom',
    toggleClass: 'active'
});

//client animation
ScrollTrigger.create({
    trigger: '.screen-4',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playVideoDog
});

function playVideoDog(){
    var dogVideo = $('.screen-4 video').get(0);
    setTimeout(function(){
        dogVideo.play();
    }, 1000);
}

//service 1 animation
ScrollTrigger.create({
    trigger: '.service-1',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo1
});

function playServiceVideo1(){
    const serviceVideo = $('.service-1 video').get(0);
    setTimeout(function(){
        serviceVideo.play();
    }, 1000);
}

//service 2 animation
ScrollTrigger.create({
    trigger: '.service-2',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo2
});

function playServiceVideo2(){
    const serviceVideo = $('.service-2 video').get(0);
    setTimeout(function(){
        serviceVideo.play();
    }, 1000);
}

//service 3 animation
ScrollTrigger.create({
    trigger: '.service-3',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo3
});

function playServiceVideo3(){
    const serviceVideo = $('.service-3 video').get(0);
    setTimeout(function(){
        serviceVideo.play();
    }, 1000);
}

//service 4 animation
ScrollTrigger.create({
    trigger: '.service-4',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo4
});

function playServiceVideo4(){
    const serviceVideo = $('.service-4 video').get(0);
    setTimeout(function(){
        serviceVideo.play();
    }, 1000);
}

//service 5 animation
ScrollTrigger.create({
    trigger: '.service-5',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo5
});

function playServiceVideo5(){
    const serviceVideo5 = $('.service-5 video').get(0);
    setTimeout(function(){
        serviceVideo5.play();
    }, 1000);
}

//service 6 animation
ScrollTrigger.create({
    trigger: '.service-6',
    start: 'center bottom',
    toggleClass: 'active',
    onToggle: playServiceVideo6
});

function playServiceVideo6(){
    const serviceVideo6 = $('.service-6 video').get(0);
    setTimeout(function(){
        serviceVideo6.play();
    }, 3500);
}

//add remove class popup
var popupBox = document.querySelector('.popup');
document.querySelector('.btn-ticket').addEventListener('click', function(){
    popupBox.classList.add('active');
});
document.querySelector('.close').addEventListener('click', function(){
    popupBox.classList.remove('active');
});
var popupAwards = document.querySelector('.popup-awards');
document.querySelector('.awards-popup-link').addEventListener('click', function(e){
    e.preventDefault();
    popupAwards.classList.add('active');
});
document.querySelector('#close-awards-popup').addEventListener('click', function(){
    popupAwards.classList.remove('active');
});

$(document).ready(function(){
    $('.portfolio-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true
    });

    $('.reel-slider').infiniteslide({
        speed: 100,
        pauseonhover: false,
        direction: 'right'
    });
});

$(window).scroll(function(){
    var screen1Height = $('.screen-1').outerHeight();
    var spaceHeight = $('.screen-1 + .space').outerHeight() - 100;
    var scrollHeight = screen1Height + spaceHeight;
    if($(window).scrollTop() > scrollHeight){
        //$('.header').addClass('hide');
        $('.header').removeClass('hide');
        $('.mobile-fixed').addClass('visible');
    } else{
        //$('.header').removeClass('visible');
        $('.mobile-fixed').removeClass('visible');
    }

    var portfolioSection = $('.section-text-2').offset().top;
    if( $(this).scrollTop() > portfolioSection ){
        $('.pins, .hula-hoop, .drum').addClass('hide');
    } else{
        $('.pins, .hula-hoop, .drum').removeClass('hide');
    }

    var backToTop = $('.contact').offset().top;
    if( $(this).scrollTop() > backToTop ){
        $('.back-to-top').addClass('show');
    } else{
        $('.back-to-top').removeClass('show');
    }
});

//scroll to section onclick
document.querySelector('.scroll-contact').addEventListener('click', function(){
    gsap.to(window, {duration: 1, scrollTo: '#section-contact', ease: 'power4' });
});
document.querySelector('.scroll-down').addEventListener('click', function(){
    gsap.to(window, {duration: 1, scrollTo: '#section-text-1', ease: 'ease' });
});

//scroll to top onclick
document.querySelector('.back-to-top').addEventListener('click', function(){
    gsap.to(window, {duration: 5, scrollTo: '#top', ease: 'linear' });
});

document.querySelector('#logo-fixed').addEventListener('click', function(){
    gsap.to(window, {duration: 5, scrollTo: '#top', ease: 'linear' });
});

//callout footer
gsap.set('.callout-footer', { autoAlpha: 0, y: 300 });
var calloutFooter = gsap.timeline({ paused: true, repeat: -1 });
calloutFooter.to('.callout-footer-set-1', { duration: 1, autoAlpha: 1, y: 0, ease: 'back.out', stagger: 2 }, 'fadeOutCallouts1');
calloutFooter.to('.callout-footer-set-1', { duration: 1, autoAlpha: 0, y: -100, ease: 'back.out' }, 'fadeOutCallouts1+=8');
calloutFooter.to('.callout-footer-set-2', { duration: 1, autoAlpha: 1, y: 0, ease: 'back.out', stagger: 2 }, 'fadeOutCallouts2');
calloutFooter.to('.callout-footer-set-2', { duration: 1, autoAlpha: 0, y: -100, ease: 'back.out' }, 'fadeOutCallouts2+=8');
calloutFooter.to('.callout-footer-set-3', { duration: 1, autoAlpha: 1, y: 0, ease: 'back.out', stagger: 2 }, 'fadeOutCallouts3');
calloutFooter.to('.callout-footer-set-3', { duration: 1, autoAlpha: 0, y: -100, ease: 'back.out' }, 'fadeOutCallouts3+=8');

//callout footer mobile
gsap.set('.mobile-callout-footer', { autoAlpha: 0, y: 100 });
var mobileCalloutFooter = gsap.timeline({ paused: true, repeat: -1 });
mobileCalloutFooter.to('.mobile-callout-footer', { duration: 1, autoAlpha: 1, y: 0, ease: 'back.out', stagger: 2 }, 'fadeOutCalloutsMobile');
mobileCalloutFooter.to('.mobile-callout-footer', { duration: 1, autoAlpha: 0, y: -100, ease: 'back.out', stagger: 2 }, 'fadeOutCalloutsMobile+=2');

//scroll to trigger callout animation
ScrollTrigger.create({
    trigger: '.site-bottom',
    start: 'top center',
    onToggle: playCalloutAnimation
});

function playCalloutAnimation(){
    calloutFooter.play();
    mobileCalloutFooter.play();
}

//menu
var $menu = $("#menu"),
    $window = $(window);

$menu.on("click","a", function(){
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
    
        TweenMax.to($window, 1, {
            scrollTo:{
                y: topY, 
                autoKill: true
            }, 
            ease:Power3.easeOut 
        });
    return false;
});
