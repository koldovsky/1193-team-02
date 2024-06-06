function init() {
    import('./header-burger-menu.js');
    import('./request-call-modal.js')
    import('./consultation-form-modal-window.js');
    import('./header-burger-menu.js')
    import('./cottages-carousel.js')
    import('./cottages-our-team.js')
    import('./cottages-blog.js')
    import('./footer.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});