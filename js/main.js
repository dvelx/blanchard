window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#open').addEventListener('click', function() {
        document.querySelector('#close').classList.toggle('is-active');
    });

    let menuButton = document.querySelector('.menu__item');
    let showItem = document.querySelector('.menu__dropdownContent');

    menuButton.onclick = function() {
        showItem.classList.toggle('show');
    }
    

});