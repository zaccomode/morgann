// Nav On-Scroll Functionality
window.onscroll = function() {scrollCheck()};

// NAV SCROLL
function scrollCheck() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").classList.add("on-scroll");
    } else {
        document.getElementById("nav").classList.remove("on-scroll");
    }
}

// FULL-PAGE NAV
function openNav() {
    document.getElementById("fullPageNav").style.width = "100%";
    document.getElementById("navContent").style.display = "inherit";
    document.getElementById("closeButton").style.display = "inherit";
}

function closeNav() {
    document.getElementById("fullPageNav").style.width = "0%";
    document.getElementById("navContent").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
}