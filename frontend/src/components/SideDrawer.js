import React from 'react'
import {Link} from "react-router-dom"
import "./sideDrawer.css"
import {totalItemInCart} from '../utils/helpers'
import { useSelector} from 'react-redux'

const SideDrawer = ({show, toggleShow}) => {
  const cartData = useSelector(state => state.cart.cartItems);
  const sideDrawerStyle = ["sidedrawer"]
  if(show){
    sideDrawerStyle.push("show")
  }
  return (
    <div className={sideDrawerStyle.join(" ")}>
      <ul className='sidedrawer__links' onClick={()=>toggleShow(false)}>
        <li>
          <Link to="/cart">
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='sidedrawer__badge'>{totalItemInCart(cartData)}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
           Shop
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default SideDrawer