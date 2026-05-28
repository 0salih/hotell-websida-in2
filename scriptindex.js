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
