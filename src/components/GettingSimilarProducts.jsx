import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const GettingSimilarProducts = ({product}) => {
    const allProducts = useSelector(state=>state.products)
 

  return (
    <div className='similar'>
        <h3>Productos</h3>
    <div className='filter-dv'>
        
    {
    allProducts?.map(e => {if(e.id !== product.id){
        return (<ProductCard key={product.id} products={e}/>)}})
    }
    </div>
    </div>
  )
}

export default GettingSimilarProducts