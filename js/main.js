window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#open').addEventListener('click', function() {
        document.querySelector('#close').classList.toggle('is-active');
    });

    document.querySelector('.menu__item').addEventListener('click', function() {
        document.querySelector('.menu__dropdownContent').classList.toggle('show');
    });

});