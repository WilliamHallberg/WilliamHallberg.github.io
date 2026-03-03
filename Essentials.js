const nav = document.getElementById("NavBar");
const arr = document.getElementById("DownArrow");
const img = document.getElementById('ParallaxBanner');

window.onscroll = function()
{
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 60)
    {
        nav.classList.add("shrink");
        arr.classList.add("Hidden");
    }
    else if (scrollPos < 20)
    {
        nav.classList.remove("shrink");
        arr.classList.remove("Hidden");
    }
};

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    img.style.transform = `translateY(${value * 0.25}px)`; 
});