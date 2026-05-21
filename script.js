const images = [
    "hotel.webp",
    "restaurant.webp",
    "balcony2.webp",
    "reception2.webp",
    "room2.webp"
];

let index = 0;

function changeImage() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];
}

setInterval(changeImage, 3000);

function autoGrow(textarea) {
    if (!textarea) return;

    textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    });
}

autoGrow(document.getElementById("other"));
autoGrow(document.getElementById("description"));