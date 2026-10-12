const video = document.querySelector('.province-video video');

const aboutSection = document.querySelector('.about');

const observer = new IntersectionObserver(([entry]) => {

    if (entry.isIntersecting) {
        video.currentTime = 0;
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }

}, {
    threshold: 0.3
});

observer.observe(aboutSection);



// =========================
// IMAGE SLIDER
// =========================

const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

const slides = Array.from(sliderTrack.children);
const totalSlides = slides.length;

let currentSlide = 0;
let isMoving = false;

// ทำสำเนาภาพแรกไปไว้ท้ายสุด
const firstClone = slides[0].cloneNode(true);
sliderTrack.appendChild(firstClone);

function showSlide(index, animate = true) {

    if (isMoving) return;

    isMoving = true;

    sliderTrack.style.transition = animate
        ? 'transform 0.5s ease'
        : 'none';

    sliderTrack.style.transform =
        `translateX(-${index * 100}%)`;

    currentSlide = index;
}


// ปุ่มขวา
nextButton.addEventListener('click', function () {

    if (currentSlide >= totalSlides) return;

    showSlide(currentSlide + 1);
});


// ปุ่มซ้าย
prevButton.addEventListener('click', function () {

    if (currentSlide <= 0) return;

    showSlide(currentSlide - 1);
});


// เมื่อเลื่อนถึงภาพแรกที่ถูก Clone
sliderTrack.addEventListener('transitionend', function () {

    isMoving = false;

    if (currentSlide === totalSlides) {

        // รอให้ภาพ Clone แสดงก่อน
        setTimeout(() => {

            sliderTrack.style.transition = 'none';

            currentSlide = 0;

            sliderTrack.style.transform =
                'translateX(0)';

        }, 50);
    }
});


// เลื่อนอัตโนมัติทุก 3 วินาที
setInterval(function () {

    if (!isMoving) {
        showSlide(currentSlide + 1);
    }

}, 3000);


function playSound() {
    const sound = document.getElementById("skipSound");

    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

function playVisionSound() {
    const sound = document.getElementById("visionSound");

    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

function playSloganSound() {
    const sound = document.getElementById("sloganSound");

    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}



/* ระบบค้นหาสถานที่ */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("placeSearch");
    const searchButton = document.getElementById("searchButton");
    const searchMessage = document.getElementById("searchMessage");
    const cards = document.querySelectorAll(".place-grid .place-card");

    if (!searchInput || !searchButton) return;

    function searchPlaces() {
        const keyword = searchInput.value.trim().toLocaleLowerCase("th");
        let found = 0;

        cards.forEach(function (card) {
            const text = card.textContent.toLocaleLowerCase("th");
            const matched = text.includes(keyword);

            card.style.display = matched ? "" : "none";

            if (matched) found++;
        });

        if (searchMessage) {
            searchMessage.hidden = found > 0;
        }
    }

    searchButton.addEventListener("click", searchPlaces);
    searchInput.addEventListener("input", searchPlaces);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchPlaces();
        }
    });
});
