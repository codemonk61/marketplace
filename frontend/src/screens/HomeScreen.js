import React, {useEffect} from 'react'
import "./homeScreen.css"
import Product from '../components/Product'
import {useDispatch, useSelector} from "react-redux"
import {getProducts} from "../redux/actions/productActions"
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.getProduct)
  const {loading, products} = productsData;
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='homescreen'>
     <h2 className='homescreen__title'>Latest Products</h2>
     <div className='homescreen__products'>
     {
      products.map((datum)=>{
        return <Product key={datum._id} {...datum}/>
      })
     }
     </div>
    </div>
  )
}

export default HomeScreen