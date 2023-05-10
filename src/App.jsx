import './App.css'
import {useRef} from 'react'
import { Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'

import Error404 from './components/Error404';
import ProductRoute from './components/ProductRoute';
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { getInfo } from './store/slices/getInfo.slice'
import ShopFrist from './components/ShopFrist';
import ShopLast from './components/ShopLast';
import AtomProfit from './components/AtomProfit';




function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
   useEffect(() => {
   dispatch(getInfo())
 }, [])
 
 const actionsNavi = useRef()

  return (
    <div className="App">
       <div className="nvbr nvbr-jstfy">
    <div className="pos-fxd">
      <nav className='navi'>
      <Link to="/"><div className="ttle">
      <img className='iphone-icon' src="assets\img\mongo.png"/>
            <strong>iPhone Import</strong>
          </div></Link>
      </nav>
    </div>
    
    </div>
    
    <Routes>
      
      <Route path='/' element={<Home products={products}/>}/>
      <Route element={<ProtectedRoutes/>}>  

      </Route>
      <Route path='*' element={<Error404/>}/>
      <Route path='/products/:id' element={<ProductRoute/>}/>
     
      <Route path='/shop' element={<ShopFrist/>}/>
      <Route path='/outcome' element={<ShopLast/>}/>
      <Route path='/test' element={<AtomProfit/>}/>
      
    </Routes>
    </div>
  )
}

export default App
