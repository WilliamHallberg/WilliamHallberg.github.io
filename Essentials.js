const nav = document.getElementById("NavBar");

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