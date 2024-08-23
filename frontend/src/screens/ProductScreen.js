import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getProductDetails} from "../redux/actions/productActions"
import './productScreen.css'
import {useParams, useNavigate}  from "react-router-dom"
import {addToCart} from '../redux/actions/cartActions'

const ProductScreen = () => {

const {id} = useParams()
const navigate = useNavigate()

  const [qty, setQty] = useState(1)

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading,  product} = productDetails
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, qty))
    navigate(`/cart`)
  }

  useEffect(()=>{
    if(product && (id !== product._id))
           dispatch(getProductDetails(id))
  }, [dispatch,id, product])

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div className='productscreen'>
      <div className='productscreen__left'>
        <div className='left__image'>
          <img src={product.imageUrl} alt={product.title}/>
        </div>
        <div className='left__info'>
         <p className='left__name'>{product.title}</p>
         <p>Price: ${product.price}</p>
         <p>{product.description}</p>
        </div>
      </div>
      <div className='productscreen__right'>
       <div className='right__info'>
          <p>
            Price: 
           <span>${product.price}</span>
          </p>
          <p>
            Status: 
           <span>{product.inStock > 0 ? "In Stock" : "Out of Stock"}</span>
          </p>
          <p>
            Qty:
            <select value={qty} onChange={(e)=>setQty(e.target.value)}>
            {
              [...Array(product.inStock).keys()].map((idx)=>{
                return(
                  <option value={idx + 1}>{idx + 1}</option>
                )
              })
            }
            </select>
          </p>
          <p>
            <button type="button" onClick={handleAddToCart}>ADD TO CART</button>
          </p>
       </div>
      </div>
    </div>
  )
}

export default ProductScreen