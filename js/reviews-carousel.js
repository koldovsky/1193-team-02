const slides = [
  `<article class="review-window">
      <img class="review-window-img" src="img/reviews-carousel/amanda_peterson_review.png" alt="Amanda Peterson">
      <h1 class="review-window-title">
          Amanda Peterson
      </h1>
      <p class="review-window-text">
        “ZEN Cottages created a perfect vacation house for us! Its a place
        comfortable and spacious enough to invite friends over. They deserve
        the highest grade!”
      </p>
      <time class="review-window-date" datetime="2022-03-11">
        11 March, 2022
      </time>
    </article>`,

    `<article class="review-window">
      <img class="review-window-img" src="img/reviews-carousel/jeff_gordons_review.png" alt="Jeff Gordons">
      <h1 class="review-window-title">
          Jeff Gordons
      </h1>
      <p class="review-window-text">
        “We bought the Shast model because we wanted something simple yet
        proven good. It was one of the best decisions for my family! Thanks
        for our new favorite place to stay.”
      </p>
      <time class="review-window-date" datetime="2022-06-13">
          13 June, 2022
      </time>
    </article>`,

    `<article class="review-window">
      <img class="review-window-img" src="img/reviews-carousel/elizabeth_smith_review.png" alt="Elizabeth Smith">
      <h1 class="review-window-title">
          Elizabeth Smith
      </h1>
      <p class="review-window-text">
        “My husband and I travel a lot, so we wanted something to make our
        travels more comfortable. As it turned out, ZEN Cottages had the right
        solution for us.”
      </p>
      <time class="review-window-date" datetime="2022-10-21">
          21 October, 2022
      </time>
    </article>`,
];

let slideIdx = 0;

function renderSlide() {
const slideContainer = document.querySelector('.carousel-wrapper');
slideContainer.innerHTML = slides[slideIdx];
if (window.matchMedia('(min-width: 768px)').matches) {
  const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
  slideContainer.innerHTML += slides[secondSlideIdx];
  if (window.matchMedia('(min-width: 980px)').matches) {
    const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
    slideContainer.innerHTML += slides[thirdSlideIdx];
  }
}
}

function nextSlide() {
slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
renderSlide();
}

function prevSlide() {
slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
renderSlide();
}

const btnNext = document.querySelector('.carousel-arrow.carousel_arrow-left');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.carousel-arrow.carousel_arrow-right');
btnPrev.addEventListener('click', prevSlide);

renderSlide();