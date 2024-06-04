document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.burger-menu-information').classList.toggle('open');
})

document.querySelectorAll('.burger-menu-information a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.burger-menu-information').classList.remove('open');
    });
});