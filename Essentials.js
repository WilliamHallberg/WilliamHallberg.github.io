const nav = document.getElementById("NavBar");
const img = document.getElementById('ParallaxBanner');

window.onscroll = function()
{
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 60)
    {
        nav.classList.add("shrink");
    }
    else if (scrollPos < 20)
    {
        nav.classList.remove("shrink");
    }
};

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    img.style.transform = `translateY(${value * 0.25}px)`; 
});