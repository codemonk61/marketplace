import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk"
import {cartReducer} from "./reducers/cartReducers"
import { getProductDetailsReducers, getProductsReducer } from "./reducers/productReduces";

const localStorageData = localStorage.getItem('cart') ?  JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
  cart: {
    cartItems: localStorageData
  }
}

export const reducers = combineReducers({
  cart: cartReducer,
  getProduct: getProductsReducer,
  getProductDetails: getProductDetailsReducers
})

export const store = createStore(
    reducers,
    INITIAL_STATE,
    applyMiddleware(thunk) // Apply middleware
  );
  