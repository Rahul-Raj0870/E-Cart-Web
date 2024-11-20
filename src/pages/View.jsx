import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product,setProduct] = useState({})
  const {id} = useParams()
  // console.log(id);
  // console.log(product);
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
   const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item?.id == id)
    if(existingProduct){
      alert("Product is already in the wishlist")

    }else{
      alert("Product added to your wishlist")
      dispatch(addToWishlist(product))
    }
   }
   const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product quantity is incremented in your cart!!")

    }else{
      alert('Product added to your cart')
    }
   }
  
  
  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='flex flex-column mb-10'>
      <div className='grid grid-cols-2 items-center '>
        <img className='ms-40' width={'350px'} height={'250px'} src={product?.thumbnail} alt="" />
        
      </div>
      
      <div className='me-4'>
        <h3 className='font-bold'>PID : {product?.id}</h3>
        <h1 className='font-bold text-5xl py-3'>{product?.title}</h1>
        <h4 className='font-bold text-red-600 text-2xl'>{product?.price}</h4>
        <h4>Brand : {product?.brand}</h4>
        <h4>Category : {product?.category}</h4>
        <p>
          <span className='font-bold pe-3'>Description</span>:
          {product?.description}
        </p>
        <h3 className='font-bold mt-4'>Client Review</h3>
        {
          product?.reviews?.length>0?
          product?.reviews?.map(item=>(
            <div key={item.data} className='shadow border rounded p-2 mb-2'>
              <h5>
                <span className='font-bold'> {item?.reviewerName}</span>: <span>{item?.comment}</span>
              </h5>
              <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>

            </div>
          ))
          :
          <div className='text-red-600 font-bold'>No Reviews yet!!!</div>
        }
        <div className='flex justify-between mt-5 me-5'>
          <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>ADD TO WISHLIST</button>
          <button onClick={handleCart} className='bg-green-600 rounded text-white p-2'>ADD TO CART</button>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default View