const iconMenu = document.querySelector('.menu__icon');

if(iconMenu) {
    iconMenu.addEventListener('click', function(event) {
        const element = document.querySelector('.menu__body');
        element.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    })
}