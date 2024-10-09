// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.card__name').innerText,
			itemsInBox: card.querySelector('.before').innerText,
			itemsInBos: card.querySelector('.black').innerText,
			weight: card.querySelector('.things').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине


		// Если товар есть в корзине

		// Если товара нет в корзине

		// Собранные данные подставим в шаблон для товара в корзине
		const cartItemHTML = `<div class="card" data-id="${productInfo.id}">
						<div class="card__item" ">
							<img class=" product-img" src="${productInfo.imgSrc}" alt="">
							
						<h3 class="card__name">${productInfo.title}</h3>
						<div class="description__block">
							<div class="before">${productInfo.itemsInBox}</div>
							<div class="flex-col">
								<div class="black">${productInfo.itemsInBos}</div>
								<div>Возраст</div>
							</div>
						</div>
						<div class="details">
							<div class="things">${productInfo.weight}</div>

							<div class="counter-wrapper">
								<div class="items__control" data-action="minus">-</div>
								<div class="items__current" data-counter>${productInfo.counter}</div>
								<div class="items__control" data-action="plus">+</div>
							</div>
							<div class="price">
								<div class="price__currency">${productInfo.price} </div>
							</div>
						</div>
					
					</div>`;

		// Отобразим товар в корзине
		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);


		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// toggleCartStatus();
		// calcCartPriceAndDelivery()

	}
});

