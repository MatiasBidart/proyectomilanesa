import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductRender from './ProductRender'
import { useSelector } from 'react-redux'


const ProductRoute = () => {
    const [product, setProduct] = useState('')
    const {id}=useParams()
    // 
    const toNum = Number(id) 
    const products = useSelector(state => state.products)
    const data = products.filter(item=> item.id === toNum )
    useEffect(() => {
     setProduct(data[0])
    }, [id])

   
  return (
    <div className='render-dv'>
    { product ? <ProductRender producter={product}/> : 
    <img className="loader" src='https://c.tenor.com/hQ88OSFbTN8AAAAC/loading.gif' alt=''/>}
    </div>
  )
}

export default ProductRoute