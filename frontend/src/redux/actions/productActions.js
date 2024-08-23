import * as actionTypes from "../constants/productConstants";
import axios from 'axios';

export const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await axios.get("/api/product")
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
      } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            error: "somthing went wrong"
        })
      }
    }
}

export const getProductDetails = (id) => {
    return async (dispatch) => {
      try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/product/${id}`)
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
      } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            error: "somthing went wrong"
        })
      }
    }
}

export const removeProductDetails = () => {
    return (dispatch)=>{
     dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
        product: {}
     })
    }
}