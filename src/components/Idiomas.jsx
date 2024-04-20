import {React, useContext } from 'react'
import '../css/nosotros.css'
import { IdiomaContext } from '../App'


export default function Idiomas() {
  return (
    <div className='idiomas-info'>
        <div className="idiomas-info-cuadro">
            <div className='titulos'>
                <h5 className='azul-titulo'>
                    WIR SPRECHEN DEUTSCH!
                </h5>
                <h5 className='azul-titulo'>
                    WE SPEAK ENGLISH!
                </h5>
            </div>
       
        
            <div className='deutsch-texto'>
                <p>En Raulfisio, entendemos la importancia de brindar una experiencia de tratamiento cómoda y accesible para nuestros <span className='azul'>pacientes de habla alemana e inglesa</span> . Nuestro equipo está preparado para ofrecer <span className='azul'>servicios de fisioterapia en alemán e inglés</span>, asegurando una comunicación clara y efectiva. </p>
                <p>Nos esforzamos por crear un ambiente donde nuestros pacientes alemanes se sientan como en casa. <span className='azul'>La atención en alemán</span> no es solo un servicio, es nuestro compromiso de proporcionar una experiencia de atención de calidad adaptada a las necesidades específicas de cada individuo. ¡Confía en nosotros para cuidar de tu bienestar en <span className='azul'>tu idioma nativo!</span></p>
            </div>
        </div>
    </div>
  )
}
