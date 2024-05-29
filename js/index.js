function init() {
    import('./header-burger-menu.js');
    import('./consultation-form-send-button.js');
    import('./header-burger-menu.js')
    import('./cottages-carousel.js')
    import('./cottages-our-team.js')
    import('./cottages-blog.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});