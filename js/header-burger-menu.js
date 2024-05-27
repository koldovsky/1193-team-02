document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.burger-menu-information').classList.toggle('open');
})