import React from 'react'
import ProductCard from './ProductCard'


const Home = ({products}) => {

  return (
    <div>
      <div className='banner-dv'>
      <img className='oncoming-phones' src='assets\img\oncoming_phones.png' alt=''/>
      </div>
      <div className='home-dv'>
      {products.map(product => 
      <ProductCard 
      key={product.id} 
      products={product}
      />)}
      </div>
    </div>
  )
}

export default Home