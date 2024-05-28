const slides = [

      `<div>
         <img src = "img/header/main/cottage-carousel1.webp alt="cottage1-img""
      </div>`
];
let slideIdx = 0;

function renderSlide(){
    const slideContainer = document.querySelector('.cottages-carousel__carousel-slides');
    slideContainer.innerHTML = slides[slideIdx];
}

function nextSlide(){
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}
function prevSlide(){
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1; 
}
renderSlide();
