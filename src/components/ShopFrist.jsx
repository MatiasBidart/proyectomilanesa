import React from 'react'
import { Link } from 'react-router-dom'

const ShopFrist = () => {
  return (
    <div>
         <section id="forms-cntnr">
            <h3>Información de Envío</h3>
            <div class="align-cntr-dv dta-dv">
              <img class="img-scrty" src="/assets/img/cloud-data-connection.svg"/>
              <div class="dta-chckd"> Datos de facturación protegidos en la nube </div>
            </div>
            <form id="form-tslf">
                <h5 class="mrgn-1">Nombre: *</h5>
                <input class="input" placeholder="Nombre completo"/>
                <h5 class="mrgn-1">Apellido: *</h5>
                <input class="input" placeholder="Apellido(s)"/>
                <h5 class="mrgn-1">Ciudad: *</h5>
                <input class="input" placeholder="Ciudad"/>
                <h5 class="mrgn-1">Calle: *</h5>
                <input class="input" placeholder="Calle"/>
                <h5 class="mrgn-1">Número: *</h5>
                <input class="input" placeholder="Número de calle"/>
                
                <input class="input" placeholder="Departamento / Manzana / Lote"/>
                <h5 class="mrgn-1">D.N.I: * </h5>
                <input class="input" placeholder="Sin espacios ni puntos"/>
            </form>
            <Link to="/outcome"><button class='align-cntr blck-bttn-2 mrgn-btn anchor-shop-btn'>Confirmar</button></Link>
            <div class="scss"> 
             <img class="crd-sz" src="assets/img/card-atm.svg" alt=""/>
             <div class="mnky">Habilitado para pago por transferencia!</div>
            </div>
        </section>
    </div>
  )
}

export default ShopFrist