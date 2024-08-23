import { Link } from "react-router-dom"
import { useSelector} from 'react-redux'
import {totalItemInCart} from '../utils/helpers'
import './navBar.css'

const NavBar = ({toggleShow}) => {
  const cartData = useSelector(state => state.cart.cartItems);
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Bazaar.com</h2>
      </div>
      {/* link */}
      <ul className="navbar__links"> 
       
        <li>
         
          <Link to="/cart" className="cart__link">
          <i className="fas fa-shopping-cart"></i>
          <span>
          Cart
          <span className="cartlogo__badge">{totalItemInCart(cartData)}</span>
          </span>
          </Link>

        </li>

        <li>
          <Link to="/">
           Shop
          </Link>
        </li>
        
      </ul>
      {/* hamburger */}
      <div className="hamburger__menu" onClick={()=>toggleShow(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default NavBar