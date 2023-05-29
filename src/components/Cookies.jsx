import React from 'react'
import {Link} from 'react-router-dom'
import "../css//cookieBaner.css"


export default function Cookies(props) {

    function esconderBanner(){
        document.getElementById('cookie-banner').classList.add('hidden')
    }


  return (
    <div className='cookie-banner'id='cookie-banner'>
        <h3>Política de cookies</h3>
        <p>Utilizamos cookies propias y de terceros para obtener datos estadísticos y mejorar nuestros servicios. Para poder seguir navegando debe aceptar su uso.
            <Link to='/cookies' className='mas-informacion'> Más información</Link> </p>
        <div className='cookie-buttons'>
             <button type="button" className="btn btn-secondary" id="btnDeny">
                Rechazar
            </button>
            <button type="button" className="btn aceptar-button" id="btnAccept"
            onClick={esconderBanner}>
                Aceptar
            </button>
        </div>
            
</div>
  )
}
