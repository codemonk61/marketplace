import React from 'react'
import { Link } from 'react-router-dom'
import "./cartItem.css"
const CartItem = ({imageUrl, name, inStock, price, product, qty, handleRemoveItem, handleQtyChange, ...props}) => {

    return (
        <div className='cartItem'>
            <div className="cartItem__image">
                <img src={imageUrl} alt={name} />
            </div>
            <p>${price}</p>
            <Link to={`/product/${product}`} className='cartItem__name'>
                <p className='cartItem__price'>{name}</p>
            </Link>

            <select className='cartItem__select' value={qty} onChange={(e)=>handleQtyChange(product, e.target.value)}>
                {
                    [...Array(Number(inStock)).keys()].map((num)=>{
                        return <option value={num + 1}>{num + 1}</option>
                    })
                }
                
            </select>
            <button className='cartItem__deleteBtn' onClick={()=>handleRemoveItem(product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem