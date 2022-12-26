const dark = "0.8";
const light = "0";

let audio;

document.body.addEventListener("click",e => {
    if (!audio) audio = new Audio("sound05.mp3");
    if (e.target.nodeName !== "SECTION") return;
    audio.cloneNode().play();
    const el = e.target;
    const opacity = window.getComputedStyle(el).getPropertyValue("opacity");
    el.style.opacity = opacity === light ? dark : light;
});
