import React from 'react'
import '../css/tratamientoNuevo.css'


export default function TratamientoNuevo(props) {
  return (
    <div className='tratamiento mb-5'>
        <img className='tratamiento-img masaje'src={props.imagen}/>
        <div className='explicacion'>
            <h4>{props.texto.titulo}</h4>
            <p>
                {
                    props.texto.descripcion
                }
            </p>
        </div>
    </div> 
  )
}
 