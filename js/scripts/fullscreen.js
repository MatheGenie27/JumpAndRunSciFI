function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

// Funktion um Fullscreen zu verlassen
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Funktion um den Fullscreen Modus zu toggeln
function toggleFullscreen(element) {
    if (!document.fullscreenElement &&    // alternative Standardmethode
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // aktuelle Methoden
        openFullscreen(element);
    } else {
        closeFullscreen();
    }
}

document.addEventListener('keypress', (event) => {
    if (event.key === 'o'){
        toggleFullscreen(document.getElementById('myCanvas'));
    }
});