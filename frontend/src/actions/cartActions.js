import axios from 'axios'
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

// we'll be storing our entire cart to local storage here!
// getstate is used to get the entire state from the tree like productlist etc from store.js

export const addToCart = (id, qty) => async (dispatch, getState) => {
	// de-structuring data..
	const { data } = await axios.get(`/api/products/${id}`)

	dispatch({
		type: CART_ADD_ITEM,
		// below are the item we wanna display in our cart!

		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		},
	})
	// once we dispatch this we are gonna store this in local storage using localstorage api!
	// we save it to local storage but how do we access it? --> we can do that in store.js by using JSON.parse!
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	})
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// save shipping address action
export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	})

	localStorage.setItem('shippingAddress', JSON.stringify(data))
}

// PAYMENT METHOD
export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: CART_SAVE_PAYMENT_METHOD,
		payload: data,
	})

	localStorage.setItem('paymentMethod', JSON.stringify(data))
}
