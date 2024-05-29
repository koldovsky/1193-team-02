document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.cottage-team__blocks img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});