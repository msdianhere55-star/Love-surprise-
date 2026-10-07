const startScreen = document.getElementById("startScreen");
const photoScreen = document.getElementById("photoScreen");
const videoScreen = document.getElementById("videoScreen");
const finalScreen = document.getElementById("finalScreen");

const yesBtn = document.getElementById("yesBtn");
const photo = document.getElementById("photo");
const photoNumber = document.getElementById("photoNumber");
const video = document.getElementById("myVideo");

const photos = [
    "assets/photo1.jpg",
    "assets/photo2.jpg",
    "assets/photo3.jpg",
    "assets/photo4.jpg",
    "assets/photo5.jpg"
];

let currentPhoto = 0;

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    screen.classList.add("active");
}


// YES BUTTON
yesBtn.addEventListener("click", () => {

    currentPhoto = 0;

    showScreen(photoScreen);

    showPhoto();
});


// SHOW PHOTOS
function showPhoto() {

    photo.style.animation = "none";

    void photo.offsetWidth;

    photo.src = photos[currentPhoto];

    photoNumber.textContent =
        `${currentPhoto + 1} / ${photos.length}`;

    photo.style.animation = "photoIn 1s ease";

    setTimeout(() => {

        if (currentPhoto < photos.length - 1) {

            currentPhoto++;

            showPhoto();

        } else {

            setTimeout(startVideo, 1200);

        }

    }, 3000);
}


// START VIDEO
function startVideo() {

    showScreen(videoScreen);

    video.currentTime = 0;

    video.play().catch(() => {
        // Browser may require user interaction before playback.
    });
}


// VIDEO FINISHED
video.addEventListener("ended", () => {

    showScreen(finalScreen);

});
