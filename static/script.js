const OPEN_ICONIC_SVG_URL = "/svg/open-iconic/";

const zeroPad = (num, places) => String(num).padStart(places, '0');
const getStyle = (svgFileName) => {
    return `-webkit-mask: url(${OPEN_ICONIC_SVG_URL}${svgFileName}.svg);
        mask: url(${OPEN_ICONIC_SVG_URL}${svgFileName}.svg);`;
};

const setIcon = (element, iconName) => {
    element.style = getStyle(iconName);
    element.alt = iconName;
}

// Prevent audio overlap from multiple audio sources
document.addEventListener("play", function(element){
    let audios = document.getElementsByTagName("audio");
    let videos = document.getElementsByTagName("video");
    let youtubeVideos = document.getElementsByClassName("youtube-embed");

    for (let i = 0; i < audios.length; i++) {
        if (audios[i] != element.target) {
            audios[i].pause();
        }
    }

    for (let i = 0; i < videos.length; i++) {
        if (videos[i] != element.target) {
            videos[i].muted = true;
        }
    }

    // TODO: YouTube video embeds support
    // for (let i = 0; i < youtubeVideos.length; i++) {
    //     let test = youtubeVideos[i].getPlaylist();
    // }
}, true);

// Since videos are only muted, we check whenever the volume of a video is changed to prevent audio overlap 
document.addEventListener("volumechange", function(element)
{
    let videos = document.getElementsByTagName("video");

    for (let i = 0; i < videos.length; i++) {
        if (videos[i] != element.target) {
            videos[i].muted = true;
        }
    }
}, true);


// Custom audio player controls
let audioElements = document.getElementsByClassName("html-audio");

for (let i = 0, len = audioElements.length; i < len; i++) {
    let audioPlayButton = audioElements[i].children[0];
    let audioSlider = audioElements[i].children[1];
    let audioCurrentTime = audioElements[i].children[2];
    let audioLengthTime = audioElements[i].children[4];
    let audioVolumeButton = audioElements[i].children[5];
    let audioSource = audioElements[i].children[6];

    let audioSourceLengthSeconds, audioSourceLengthMinutes, audioSourceLengthHours;

    audioPlayButton.onclick = function() {
        if (audioSource.paused) {
            audioSource.play();
        } else {
            audioSource.pause();
        }
    };

    audioSource.onplay = function() {
        setIcon(audioPlayButton.firstElementChild, "media-pause");
    };

    audioSource.onpause = function() {
        setIcon(audioPlayButton.firstElementChild, "media-play");
    };

    audioSource.addEventListener("ended", function() {
        audioSource.currentTime = 0;
    });

    function setAudioLength() {
        audioSlider.max = audioSource.duration;

        audioSourceLengthSeconds = parseInt(audioSource.duration % 60);
        audioSourceLengthMinutes = parseInt((audioSource.duration / 60) % 60);
        audioSourceLengthHours = parseInt(((audioSource.duration / 60) / 60) % 60);

        if (audioSourceLengthHours > 0) {
            audioLengthTime.innerHTML = `${zeroPad(audioSourceLengthHours, 2)}:${zeroPad(audioSourceLengthMinutes, 2)}:${zeroPad(audioSourceLengthSeconds, 2)}`;
        } else {
            audioLengthTime.innerHTML = `${zeroPad(audioSourceLengthMinutes, 2)}:${zeroPad(audioSourceLengthSeconds, 2)}`;
        }
    }

    function setCurrentAudioPosition() {
        let seconds = parseInt(audioSource.currentTime % 60);
        let minutes = parseInt((audioSource.currentTime / 60) % 60);

        if (audioSourceLengthHours > 0) {
            let hours = parseInt(((audioSource.currentTime / 60) / 60) % 60);
            audioCurrentTime.innerHTML = `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`;
        } else {
            audioCurrentTime.innerHTML = `${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`;
        }
    }

    audioSource.onloadedmetadata = function() {
        setAudioLength();
    };

    // Because sometimes the browser may start loading the audio before the
    // script is loaded, we check if the metadata is ready (readyState = 1)
    if (audioSource.readyState >= 1) {
        setAudioLength();
    }

    audioSource.ontimeupdate = function() {
        audioSlider.value = audioSource.currentTime;
        setCurrentAudioPosition();
    };

    audioSlider.addEventListener("input", function() {
        audioSource.currentTime = audioSlider.value;
    });

    audioVolumeButton.onclick = function() {
        if (!audioSource.muted) {
            audioSource.muted = true;

            setIcon(audioVolumeButton.firstElementChild, "volume-off");
        } else {
            audioSource.muted = false;

            setIcon(audioVolumeButton.firstElementChild, "volume-high");
        }
    }
}


// Carousel setup (using embla-carousel)
let emblaElements = document.getElementsByClassName("embla-wrapper");

for (let i = 0, len = emblaElements.length; i < len; i++) {
    let emblaNode = emblaElements[i].childNodes[1].children[0];
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

    function setupPrevNextBtns(prevBtn, nextBtn, embla) {
        prevBtn.addEventListener('click', embla.scrollPrev, false);
        nextBtn.addEventListener('click', embla.scrollNext, false);
    }

    const disablePrevNextBtns = (prevBtn, nextBtn, embla) => () => {
        if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
        else prevBtn.setAttribute('disabled', 'disabled');

        if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
        else nextBtn.setAttribute('disabled', 'disabled');
    };

    const dots = emblaElements[i].childNodes[3];
    const dotsArray = generateDotBtns(dots, embla);
    const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
    
    const prevBtn = emblaElements[i].childNodes[1].children[1];
    const nextBtn = emblaElements[i].childNodes[1].children[2];
    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

    setupDotBtns(dotsArray, embla);
    setupPrevNextBtns(prevBtn, nextBtn, embla);

    embla.on("select", setSelectedDotBtn);
    embla.on("select", disablePrevAndNextBtns);
}


// Currently disabled as it makes carousels pretty annoying to use
// Image zoom
mediumZoom('[data-zoomable]', {
    margin: 20
});


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


// Todolist key

let todolistkeyArray = document.getElementsByClassName("todolist-key");
for (let i = 0; i < todolistkeyArray.length; i++) {
    todolistkeyArray[i].children[0].onclick = function() {
        if (todolistkeyArray[i].children[0].textContent == "Show Key") {
            todolistkeyArray[i].children[0].textContent = "Hide Key";
            todolistkeyArray[i].children[1].classList = "todolist-key-body";
        } else {
            todolistkeyArray[i].children[0].textContent = "Show Key";
            todolistkeyArray[i].children[1].classList = "todolist-key-body hide";
        }
    };
}