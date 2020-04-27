const headerBlurElement = document.getElementById('header-blur');

var scrollPercentage;

window.onscroll = () => {
    scrollPercentage = window.scrollY / window.innerHeight;
    if(scrollPercentage <= 1) {
        headerBlurElement.style.opacity = scrollPercentage;
    }
}