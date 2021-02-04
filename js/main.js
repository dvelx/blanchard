window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#open').addEventListener('click', function() {
        document.querySelector('#close').classList.toggle('is-active');
    });

    document.querySelectorAll('.menu__item').forEach(function(menuItem) {   //выбираем из документа нужный нам класс с forEach я еще не разобрался что это такое и как оно работает
        menuItem.addEventListener('click', function(event) {                //добавляем к нашему выбранному классу обработчик событий click
            const path = event.currentTarget.dataset.path                   //создаем const для того чтобы найти наш селектор по data в случае получится что будем искать по  data-path="какое то значение"

            dropDown = document.querySelector(`[data-target="${path}"]`);

            document.querySelectorAll('.menu__dropdownContent').forEach(function(tabContent) {
                tabContent.classList.remove('show')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('show');

            if (dropDown.classList.contains('show')) {
                document.querySelector(`[data-path="${path}"]`).addEventListener('click', function() {
                    dropDown.classList.toggle('show')
                })
            }
        })
    })

});