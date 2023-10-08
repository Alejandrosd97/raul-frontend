import React, {useEffect} from 'react'
import '../css/carta.css'
import masaje from '/src/assets/imgs/masaje.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Carta(props) {

   useEffect(()=>{
        AOS.init({duration:1000})
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
