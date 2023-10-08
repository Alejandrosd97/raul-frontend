import React from 'react'
import '../css/footer.css'
import facebook from '/src/assets/imgs/facebook-logo.svg'
import instagram from '/src/assets/imgs/instagram-logo.png'
import raulFisioLogo from '/src/assets/imgs/raul_logo_modificado.png'




function Footer(){

    
    return(
        <footer>
            <div className='my-footer'>
                <img className='raul-logo' src={raulFisioLogo}/>
                <div className='redes-sociales'>
                    <a  target="_blank" href="https://www.instagram.com/clinica_raulfisio/?hl=es"><img className='logo' src={instagram}/></a>
                    <a  target="_blank" href="https://es-es.facebook.com/raul.manzanoromero.9/"><img className='logo' src={facebook}/></a>
                </div>
                <div>
                    <p>Gandia: 666 33 83 08 / Carrer Clot de la Mota 27 bajo</p>
                    <p>Denia: 674 64 39 37 / Camí de les Bovetes al Mar 1</p>
                </div>
                <p>clinicaraulfisio@gmail.com</p>
            </div>

        </footer>
                  
    )
}

export default Footer



