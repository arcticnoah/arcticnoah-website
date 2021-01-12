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

    let audioSourceLengthSeconds, audioSourceLengthMinutes, audioSourceLengthHours;

    audioPlayButton.onclick = function() {
        if (audioSource.paused) {
            audioSource.play();
        } else {
            audioSource.pause();
        }
    }

    audioSource.onplay = function() {
        audioPlayButton.childNodes[0].setAttribute("data-glyph", "media-pause");
    }

    audioSource.onpause = function() {
        audioPlayButton.childNodes[0].setAttribute("data-glyph", "media-play");
    }

    audioSource.addEventListener("ended", function() {
        audioSource.currentTime = 0;
    });

    function setAudioLength() {
        audioSlider.max = audioSource.duration;

        audioSourceLengthSeconds = parseInt(audioSource.duration % 60);
        audioSourceLengthMinutes = parseInt((audioSource.duration / 60) % 60);
        audioSourceLengthHours = parseInt(((audioSource.duration / 60) / 60) % 60);

        if (audioSourceLengthHours > 0) {
            audioTime.innerHTML = `00:00:00 / ${zeroPad(audioSourceLengthHours, 2)}:${zeroPad(audioSourceLengthMinutes, 2)}:${zeroPad(audioSourceLengthSeconds, 2)}`;
        } else {
            audioTime.innerHTML = `00:00 / ${zeroPad(audioSourceLengthMinutes, 2)}:${zeroPad(audioSourceLengthSeconds, 2)}`;
        }
    }

    function setCurrentAudioPosition() {
        let timeStampSplit = audioTime.innerHTML.split(" / ");
        let seconds = parseInt(audioSource.currentTime % 60);
        let minutes = parseInt((audioSource.currentTime / 60) % 60);
        if (audioSourceLengthHours > 0) {
            let hours = parseInt(((audioSource.currentTime / 60) / 60) % 60);
            audioTime.innerHTML = `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)} / ${timeStampSplit[1]}`;
        } else {
            audioTime.innerHTML = `${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)} / ${timeStampSplit[1]}`;
        }
    }

    audioSource.addEventListener("loadeddata", setAudioLength());

    audioSource.ontimeupdate = function() {
        audioSlider.value = audioSource.currentTime;
        setCurrentAudioPosition();
    }

    audioSlider.addEventListener("input", function() {
        audioSource.currentTime = audioSlider.value;
    });

    audioVolumeButton.onclick = function() {
        if (!audioSource.muted) {
            audioSource.muted = true;
            audioVolumeButton.childNodes[0].setAttribute("data-glyph", "volume-off");
        } else {
            audioSource.muted = false;
            audioVolumeButton.childNodes[0].setAttribute("data-glyph", "volume-high");
        }
    }
}


// Carousel setup (using embla-carousel)
let emblaElements = document.getElementsByClassName("embla-wrapper");

for (let i = 0, len = emblaElements.length; i < len; i++) {
    let emblaNode = emblaElements[i].childNodes[1];
    let embla = EmblaCarousel(emblaNode, { loop: true});

    function setupDotBtns(dotsArray, embla) {
        dotsArray.forEach((dotNode, i) => {
            dotNode.addEventListener("click", () => embla.scrollTo(i), false);
        });
    }

    function generateDotBtns(dots, embla) {
        const template = document.getElementById("embla-dot-template").innerHTML;
        dots.innerHTML = embla.scrollSnapList().reduce(acc => acc + template, "");
        let array = [].slice.call(dots.querySelectorAll(".embla__dot"));
        array[0].classList.add("is-selected");
        return array;
    };

    const selectDotBtn = (dotsArray, embla) => () => {
        let previous = embla.previousScrollSnap();
        let selected = embla.selectedScrollSnap();
        dotsArray[previous].classList.remove("is-selected");
        dotsArray[selected].classList.add("is-selected");
    };

    const dots = emblaElements[i].childNodes[3];
    const dotsArray = generateDotBtns(dots, embla);
    const setSelectedDotBtn = selectDotBtn(dotsArray, embla);

    setupDotBtns(dotsArray, embla);
    embla.on("select", setSelectedDotBtn);
}


// Currently disabled as it makes carousels pretty annoying to use
// Image zoom
// mediumZoom('[data-zoomable]', {
//     margin: 20
// });


// Mobile 'hover'-like support
window.onresize = function (event) {
    checkClientWidth();
};

function checkClientWidth() {
    width = document.body.clientWidth;
    
    if (width <= 899) {
        setupIntersectionObserver(1);
        window.onresize = null; // Remove event
    }
}

// thresholdValue: 0.00 to 1.00 => 0% to 100% visible
function setupIntersectionObserver(thresholdValue) {
    const mobileHoverItems = document.querySelectorAll(".simulate-hover");
    const intersectionObserver = window.IntersectionObserver;
    
    const observer = new intersectionObserver((items) =>
        items.forEach(({ isIntersecting, target }) => {
            if (isIntersecting && !target.classList.contains("simulate-hover-active")) {
                target.classList.add("simulate-hover-active");
            } else if (!isIntersecting && target.classList.contains("simulate-hover-active")) {
                target.classList.remove("simulate-hover-active");
            }
        }), { threshold: thresholdValue, rootMargin: '-10% 0px' }
    );
    
    mobileHoverItems.forEach((element) => observer.observe(element));
}

checkClientWidth();