import React from 'react'
import CartItem from '../components/CartItem'
import "./cartScreen.css"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart} from '../redux/actions/cartActions'
import {totalItemInCart, totalPriceInCart} from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartScreen = () => {

  const cartData = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch()

  const handleQtyChange = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className='cartScreen'>
     <div className='cartScreen__left'> 
        <h2>Shopping Cart</h2>

        {
          cartData.length !== 0 ? cartData.map((datum, index)=>{
            return   <CartItem key={datum.product} {...datum} handleRemoveItem={handleRemoveItem} handleQtyChange={handleQtyChange}/>
          })
          :
          <Link to={'/'}>Go to Home Page</Link>
        }
      
     </div>
     <div className='cartScreen__right'> 
       <div className='cartScreen__info'>
        <p>Subtotal ({totalItemInCart(cartData)}) Item</p>
        <p>${totalPriceInCart(cartData)}</p>
       </div>
       <div className="cartScreen__button">
        <button type="button">PROCCED TO CHECKOUT</button>
       </div>
     </div>
    </div>
  )
}

export default CartScreen