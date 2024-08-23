import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'

const Product = ({ description, imageUrl, price, title, inStock, _id }) => {

  return (
    <div className='product'>
      <img src={imageUrl} alt="product" />
      <div className='product__info'>
        <p className='info__name'>{title}</p>
        <p className='info__description'>
          {description}
        </p>
        <p className='info__price'>${price}</p>
        <Link to={`/product/${_id}`} className='info__button'>VIEW</Link>
      </div>
    </div>
  )
}

export default Product