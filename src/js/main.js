// carousel image
const carouselImg = document.querySelector('.carousel-slider');

// button
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

// Array di img
const imgArray = [
    './assets/images/01.webp',
    './assets/images/02.webp',
    './assets/images/03.webp',
    './assets/images/04.webp',
    './assets/images/05.webp',
];
// -----------------------------------------------
//  CARICO il div "carousel-img"
// -----------------------------------------------

for (let i = 0; i < imgArray.length; i++) {
    let itemActive = '';
    if (i == 0) {
        itemActive = 'item-active';
    }
    carouselImg.innerHTML += ` <div class="item ${itemActive}">
                <img src=" ${imgArray[i]}" alt="">
            </div>`;
}
