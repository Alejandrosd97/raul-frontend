import React, { useEffect } from 'react'
import '../css/carta.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Carta(props) {

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])


  // const mostrarCarta = (e) => {
  //   e.target.parentElement.classList.add('activo')
  //   e.target.parentElement.previousElementSibling.firstChild.classList.add('active-img')
  //   e.target.classList.add('h4-active')
  //   e.target.nextElementSibling.nextElementSibling.classList.add('visible')
  //   e.target.classList.add('left')
  // }

  // const cerrarCarta = (e) => {
  //   e.target.parentElement.classList.remove('activo')
  //   e.target.parentElement.previousElementSibling.firstChild.classList.remove('active-img')
  //   // e.target.nextElementSibling.classList
  //   e.target.previousElementSibling.previousElementSibling.classList.remove('h4-active')
  //   e.target.previousElementSibling.previousElementSibling.classList.remove('left')

  //   e.target.classList.remove('visible')
  // }

  return (
    <div className='carta' data-aos={props.fade}>
      <div className='imagen-caja'>
        <img src={props.imagen} alt="" />
        <p className='descripcion-carta'>{props.texto.descripcion}</p>
      </div>
      <div className="contenido">
        <h4>{props.texto.titulo}</h4>
      </div>

    </div>
  )
}
