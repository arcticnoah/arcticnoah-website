const zeroPad = (num, places) => String(num).padStart(places, '0');

// Auto pause other audio elements when pressing play
document.addEventListener("play", function(element){
    let audios = document.getElementsByTagName("audio");
    for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != element.target) {
            audios[i].pause();
        }
    }
}, true);

// Custom audio player controls
let audioElements = document.getElementsByClassName("html-audio");

for (let i = 0, len = audioElements.length; i < len; i++) {
    let audioPlayButton = audioElements[i].childNodes[1];
    let audioSlider = audioElements[i].childNodes[3];
    let audioTime = audioElements[i].childNodes[5];
    let audioVolumeButton = audioElements[i].childNodes[7];
    let audioSource = audioElements[i].childNodes[9];

    audioPlayButton.onclick = function() {
        if (audioSource.paused) {
            audioSource.play();
        } else {
            audioSource.pause();
        }
    };

    audioSource.onplay = function() {
        audioPlayButton.childNodes[0].setAttribute("data-glyph", "media-pause");
    };

    audioSource.onpause = function() {
        audioPlayButton.childNodes[0].setAttribute("data-glyph", "media-play");
    };

    audioSource.addEventListener("ended", function() {
        audioSource.currentTime = 0;
    });

    audioSource.onloadeddata = function() {
        audioSlider.max = audioSource.duration;
        let seconds = parseInt(audioSource.duration % 60);
        let minutes = parseInt((audioSource.duration / 60) % 60);
        audioTime.innerHTML = `00:00 / ${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`;
    }

    audioSource.ontimeupdate = function() {
        audioSlider.value = audioSource.currentTime;
    }

    audioSlider.addEventListener("input", function() {
        audioSource.currentTime = audioSlider.value;
    });

    audioSource.addEventListener("timeupdate", function() {
        let seconds = parseInt(audioSource.currentTime % 60);
        let minutes = parseInt((audioSource.currentTime / 60) % 60);
        let timeStampSplit = audioTime.innerHTML.split(" / ");
        audioTime.innerHTML = `${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)} / ${timeStampSplit[1]}`;
    });

    audioVolumeButton.onclick = function() {
        if (!audioSource.muted) {
            audioSource.muted = true;
            audioVolumeButton.childNodes[0].setAttribute("data-glyph", "volume-off");
        } else {
            audioSource.muted = false;
            audioVolumeButton.childNodes[0].setAttribute("data-glyph", "volume-high");
        }
    };
}