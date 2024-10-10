function toggleCartStatus() {

	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartEmptyBadge = document.querySelector('[data-cart-empty]');
	const orderForm = document.querySelector('#order-form');
	const cartTotal = document.querySelector('[data-cart-delivery]');

	if (cartWrapper.children.length > 0) {
		console.log('FULL');
		cartEmptyBadge.classList.add('none');
		orderForm.classList.remove('none');
		cartTotal.classList.remove('none');
	} else {
		console.log('EMPTY');
		cartEmptyBadge.classList.add('none');
		orderForm.classList.remove('none');
		cartTotal.classList.remove('none');
	}

}

