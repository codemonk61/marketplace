import * as actionTypes from '../constants/cartContants';
import axios from "axios";

export const addToCart = (id, qty) => {
    return async (dispatch, getState) => {
        const {data} = await axios.get(`/api/product/${id}`)

        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                product: data._id,
                name: data.title,
                imageUrl: data.imageUrl,
                price: data.price,
                inStock: data.inStock,
                description: data.description,
                qty
            }

        })
        localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
    }
}

export const removeFromCart = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: id
        })
        localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
    }
}