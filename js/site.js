const headerBlurElement = document.getElementById('header-blur');

var scrollPercentage;


window.onload = () => {
    //window.onscroll();
}
window.onscroll = () => {
    scrollPercentage = window.scrollY / window.innerHeight;
    if(scrollPercentage <= 1) {
        headerBlurElement.style.opacity = scrollPercentage;
    }
    fadeInOnScroll();
}



var fadeInElements = document.getElementsByClassName('fade-in-on-scroll');
var fadeInElementsArray = Array.prototype.slice.call(fadeInElements,0);
var fadedIn = []
fadeInElementsArray.forEach(element => {
    fadedIn[element] = false;
});
const fadeInOnScroll = () => {
    fadeInElementsArray.forEach(element => {
        if(!element.classList.contains('faded-in')){
            var triggerPos = element.offsetTop - window.innerHeight;
            if(window.scrollY > triggerPos){
                element.classList.add('faded-in')
                TweenMax.to(element, {
                    y:-32,
                    autoAlpha: 1,
                    duration: 0.8
                });
            }
        }
    });
}


//Header text float in
gsap.from("header > div:nth-child(3) > h1", {
    duration: 1,
    x: 40,
    opacity: 0,
    ease: Power3.easeOut
});
gsap.from("header > div:nth-child(3) > h2", {
    duration: 1,
    x: -40,
    opacity: 0,
    ease: Power3.easeOut,
});
