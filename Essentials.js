const nav = document.getElementById("NavBar");
const arr = document.getElementById("DownArrow");
const img = document.getElementById('ParallaxBanner');
const guy = document.getElementById('PeakImage');

window.onscroll = function()
{
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 60)
    {
        nav.classList.add("shrink");
        if(arr)
        arr.classList.add("Hidden");
    }
    else if (scrollPos < 20)
    {
        nav.classList.remove("shrink");
        if(arr)
        arr.classList.remove("Hidden");
    }
};

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    if(img)
    img.style.transform = `translateY(${value * 0.25}px)`; 
});

guy.addEventListener('click', function(){
    guy.classList.add('animate-bounce');

    setTimeout(() => {
        guy.classList.remove('animate-bounce');
    }, 250); 
})