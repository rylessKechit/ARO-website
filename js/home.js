var video = document.getElementById("background-video")

function createH1Element(text)
{
    var h = document.createElement("H1");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.text.appendChild(h);
}

video.onended = function() {
    video.pause();
    document.getElementById("background-video").style.display = 'none';
}

window.sr = ScrollReveal();

sr.reveal(".animate-bottom", {
    origin: "bottom",
    duration: 2000,
    distance: "25rem",
    delay: 10000,
});

sr.reveal(".animate-top", {
    origin: "top",
    duration: 4000,
    distance: "5rem",
    delay: 23000,
});