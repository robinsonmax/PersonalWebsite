window.onload = () => {
    setTimeout(scrollCtaAnim, 1000);
}
window.onscroll = () => {
    fadeInOnScroll();
    scrollCtaAnim();
    hideSubHeading();
}

const ScrollPercentage = () => window.scrollY / window.innerHeight;

//Fade in on scroll
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
                TweenMax.from(element, {
                    y:32,
                    autoAlpha: 0,
                    duration: 0.8
                });
            }
        }
    });
}

//Header text float in
gsap.from("header > h1", {
    duration: 1,
    y: 16,
    opacity: 0,
    ease: Power3.easeOut
});
if(ScrollPercentage() < 0.6){
gsap.from("header > h2", {
    duration: 1,
    y: -16,
    opacity: 0,
    ease: Power3.easeOut,
});
}

//Scroll CTA
const scrollCtaAnim = () => {
    //Hide scroll prompt when not at the top
    if(window.scrollY == 0){
        gsap.to('#scroll-cta', {
            opacity: 1,
            duration: 0.35
        })
    } else {
        gsap.to('#scroll-cta', {
            opacity: 0,
            duration: 0.25
        })
    }
}
//Scroll promt repeating animation
var scrollTimeLine = new TimelineMax({
    repeat: -1,
    repeatDelay: 0,
    delay: 1
})
.from('#scroll-cta > span', {
    y: 50,
    duration: 0.5,
    ease:Power3.easeOut
})
.to('#scroll-cta > span', {
    y: -50,
    duration: 0.5,
    delay: 1,
    ease:Power3.easeIn
});

document.querySelector('#scroll-cta').onclick = () => {
    window.scrollTo({
        top: window.innerHeight - 120,
        left: 0,
        behavior: 'smooth'
      });
}

const titleBackground = document.getElementById('title-background');
const hideSubHeading = () => {
    titleBackground.style.opacity = (2*ScrollPercentage())-0.8;
    if(ScrollPercentage() > 0.6){
        gsap.to('header > h2', {
            opacity: 0,
            duration: 0.25,
            ease:Power3.ease
        })
    } else {
        gsap.to('header > h2', {
            opacity: 1,
            duration: 0.25,
            ease:Power3.ease
        })
    }
}


const socialLinksAnimation = {
    triggers: [document.querySelectorAll('#social-links > li')],
    init: () => {
        socialLinksAnimation.triggers[0].forEach(element => {
            element.addEventListener("mouseenter",
                () => {socialLinksAnimation.MouseEnter(element)});
            element.addEventListener("mouseout",
                () => {socialLinksAnimation.MouseLeave(element)});
        })
    },
    MouseEnter: (element) => {
        gsap.to(element, 0.4, {
            scale:1.4,
            ease:"elastic.out(1, 0.3)"
        })
    },
    MouseLeave: (element) => {
        gsap.to(element, 0.15, {
            scale:1,
        })
    }
}

socialLinksAnimation.init();