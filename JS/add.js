// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.classList.contains('section__button')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.card__name').innerText,
			itemsInBos: card.querySelector('.black').innerText,
			weight: card.querySelector('.things').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"] `);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML =
				`<div class="card__new" data-id="${productInfo.id}">
						<div class="card__item-cat" ">

							   <img class=" product-png" src="${productInfo.imgSrc}" alt="">
								 <div class="d">
								   <h3 class="card__name-cat">${productInfo.title}</h3>
									 <div class="details__cat">
									 
						     	   <div class="things-cat">${productInfo.weight}</div>
							       <div class="counter-wrapper_cat">
								       <div class="items__control" data-action="minus">-</div>
								       <div class="items__current" data-counter>${productInfo.counter}</div>
								       <div class="items__control" data-action="plus">+</div>
							       </div>
						      	<div class="price">
								      <div class="price__currency-cat">${productInfo.price} </div>
							    </div>
									</div>
						</div>
					</div>
					<hr>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}


		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// calcCartPriceAndDelivery()
		toggleCartStatus();



	}

});



