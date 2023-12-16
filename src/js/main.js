// -----------------------------------------------
//                    VARIABILI
// -----------------------------------------------
// carousel image
const $carouselImg = document.querySelector('.carousel-slider');
// Array di img
const imgArray = [
    './assets/images/01.webp',
    './assets/images/02.webp',
    './assets/images/03.webp',
    './assets/images/04.webp',
    './assets/images/05.webp',
];

const $btnUp = document.querySelector('.btn-up');
const $btnDown = document.querySelector('.btn-down');
let immagineAttualmenteVisibile = 0;

// -----------------------------------------------
//                    FUNZIONI
// -----------------------------------------------
function btnDown() {
    if (immagineAttualmenteVisibile < allItems.length - 1) {
        allItems[immagineAttualmenteVisibile].classList.remove('item-active');
        immagineAttualmenteVisibile++;
        allItems[immagineAttualmenteVisibile].classList.add('item-active');
    } else {
        allItems[immagineAttualmenteVisibile].classList.remove('item-active');
        immagineAttualmenteVisibile = 0;
        allItems[immagineAttualmenteVisibile].classList.add('item-active');
    }
}

// ---------------------------------------------------------
//  INVOCAZIONE DELLE FUNZIONI ED ESECUZIONE DEL CODICE
// -----------------------------------------------

for (let i = 0; i < imgArray.length; i++) {
    let itemActive = '';
    if (i == 0) {
        itemActive = 'item-active';
    }

    $carouselImg.innerHTML += ` <div class="item ${itemActive}">
                <img src=" ${imgArray[i]}" alt="">
            </div>`;
}
const allItems = document.querySelectorAll('.item');

$btnUp.addEventListener('click', function () {
    if (immagineAttualmenteVisibile > 0) {
        allItems[immagineAttualmenteVisibile].classList.remove('item-active');
        immagineAttualmenteVisibile--;
        allItems[immagineAttualmenteVisibile].classList.add('item-active');
    }
});

$btnDown.addEventListener('click', btnDown);

setInterval(btnDown, 2000);
