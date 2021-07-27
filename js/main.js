window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#open').addEventListener('click', function() {
		document.querySelector('#close').classList.toggle('is-active');
	});

	document.querySelectorAll('.menu__item').forEach(function(menuItem) {   //выбираем из документа нужный нам класс с forEach я еще не разобрался что это такое и как оно работает
		menuItem.addEventListener('click', function(event) {                //добавляем к нашему выбранному классу обработчик событий click
			const path = event.currentTarget.dataset.path                   //создаем const для того чтобы найти наш селектор по data в случае получится что будем искать по  data-path="какое то значение"

			dropDown = document.querySelector(`[data-target="${path}"]`);

			document.querySelectorAll('.menu__dropdown-content').forEach(function(tabContent) {
				tabContent.classList.remove('show')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('show');

			if (dropDown.classList.contains('show')) {
				document.querySelector(`[data-path="${path}"]`).addEventListener('click', function() {
					dropDown.classList.toggle('show')
				});
			};
		});
	});


	const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
	const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

	for (const tab of tabsHandlerElems) {
		tab.addEventListener('click', () => {
			tabsHandlerElems.forEach(item => {
				if (tab === item) {
					item.classList.add('country-btn-active');
				} else {
					item.classList.remove('country-btn-active');
				}
			});

			tabsFieldElems.forEach(item => {
				if (item.dataset.tabsField === tab.dataset.tabsHandler) {
					item.classList.remove('hidden')
				} else {
					item.classList.add('hidden')
				}
			});
		});
	};

	document.querySelectorAll('.tabs-author').forEach(function(tabsAuthor) {
		tabsAuthor.addEventListener('click', function(event) {
			const author = event.currentTarget.dataset.author
			
			document.querySelectorAll('.catalog__item-image').forEach( function(authorImg) {
				authorImg.classList.add('hidden');
			})
			document.querySelector(`[data-author-img="${author}"]`).classList.toggle('hidden')
		})
	})

});