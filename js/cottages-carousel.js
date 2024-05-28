const slides = [
       `<div class="cottages-carousel__carousel-slides">
       <img src = "img/header/main/cottage-carousel1.webp"
       </div>`,
       `<div>
       <img src = "img/header/main/cottage-carousel2.webp"
       </div>`,
       `<div>
       <img src = "img/header/main/cottage-carousel3.webp"
       </div>`,
       `<div>
       <img src = "img/header/main/cottage-carousel4.webp"
       </div>`,
];
let slideIdx = 0;

function renderSlide(){
    const slideContainer = document.querySelector('.cottages-carousel__carousel-slides');
    slideContainer.innerHTML = slides[slideIdx];
    if(window.matchMedia('(min-width : 768px)').matches){
        const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if(window.matchMedia('(min-width : 1024px)').matches){
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
    }
}
}

function nextSlide(){
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}
function prevSlide(){
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1; 
    renderSlide();
}
renderSlide();

const buttonNext = document.querySelector('cottages-carousel__btn-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrevious = document.querySelector('cottages-carousel__btn-prev');
buttonPrevious.addEventListener('click', prevSlide);



