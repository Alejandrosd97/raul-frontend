import React, {useEffect} from 'react'
import '../css/carta.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Carta(props) {

   useEffect(()=>{
        AOS.init({duration:800})
    },[]) 

  return (
    <div className='carta' data-aos={props.fade}>
        <div className='imagen-caja'>
            <img src={props.imagen} alt="" />
        </div>
        <div className="contenido">
            <h4>{props.texto.titulo}</h4>
            <p>{props.texto.descripcion}</p>
        </div>
    </div>
  )
}
