window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#open').addEventListener('click', function() {
        document.querySelector('#close').classList.toggle('is-active');
    });

    document.querySelectorAll('.menu__item').forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            dropDown = document.querySelector('.menu__dropdownContent');

            document.querySelectorAll('.menu__dropdownContent').forEach(function(tabContent) {
                tabContent.classList.remove('show')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('show');

            if (dropDown.classList.contains('show')) {
                document.querySelector('.menu__item').addEventListener('click', function() {
                    dropDown.classList.remove('show')
                })
            }
        })
    })

});