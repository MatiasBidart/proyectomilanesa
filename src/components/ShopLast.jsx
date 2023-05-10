import React,{useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const ShopLast = () => {
  const [isActive, setIsActive] = useState(false)
  const [isShowed, setIsShowed] = useState('')
 const handleCiker = ()=>{
  setIsActive(!isActive)
 }
// 
 const id = localStorage.getItem('item')
 const toNum = Number(id)
 const products = useSelector(state => state.products)
 const data = products.filter(item=> item.id === toNum )


 const color = localStorage.getItem('color')
 const index = Number (localStorage.getItem('index'))
// 
  useEffect(() => {
   isActive ? 
   setIsShowed('shw-dv')
   : setIsShowed('')
  }, [isActive])

  const handleCopy = (e => { 
    navigator.clipboard.writeText('27422650216')
   })
 
  return (
    <div>
     <section className="align-cntr dir-clmn" id="onclick-sctn">
        <div onClick={handleCiker} className="vrnc-cntnr align-cntr crsr-pntr">
            <div id="frst-dv">
            <img className="crd-sz mrgn-crt" src="/assets/img/shopping-cart.svg" alt=""/>
            <p id="ttl-ftr">Total a pagar</p>
            <img className="crd-sz" src="/assets/img/angle-down.svg" alt=""/>
            </div>
            <div id="scnd-dv">
            <h4> ${data[0].price[index]}</h4>
            </div>
        </div>
        <div className={'hddn-dv ' + isShowed} id="hddn-dv">
          <div>
            <img className='shopimg' src={data[0].productImgs[0]} alt=''/>
            <h4>{data[0].title}</h4>
            <p>Color: {color} - Espacio: {data[0].espacio[index]}</p>
          </div>

        </div>
    </section>
    <section className='align-cntr flx-dr-clmn'>

    <section>
      <div>
        <div className='trnsfr-mp'>
        <img className='mp-icon align-cntr' src='assets\img\mp-icon.png' alt=''/>
          Transferir a la siguiente cuenta
        </div>
        <div className='mp-dv'>
        <p className="larger ln-hgt-1"><b>Dana Melanie Muñoz</b> <br></br>
CUIT/CUIL: 27 - 42265021 - 6 <FontAwesomeIcon className='cpy-icn' icon={faCopy} onClick={handleCopy} />
<br></br>
Alias: cristal.lady
<br></br> <hr className='mrgn-tp-1'></hr>
CBU: 14300017 - 13030023250016
<br></br>
NRO. CUENTA: 1303002325001</p>
        </div>
      </div>
    </section>
    <div className='dv-mrgn-tp'>
    <Link className='cart-button-prdct' to="/">
        Volver al Inicio 
    </Link>
    </div>

    </section>
    </div>

  )
}

export default ShopLast