import {React, useContext} from 'react'
import '../css/colaboraciones.css'
import logo_tenis from '/src/assets/imgs/logo_tenis.png'

import { IdiomaContext } from '../App'



export default function Colaboraciones() {
    const {idioma} = useContext(IdiomaContext)

   

  return ( 
    <>
    <h2>{idioma[7].colaboraciones.titulo}</h2>
    <div className='contenedor-colab'>
        <div className='colaboraciones'>
            <div className='colaboracion'>
                <img src={logo_tenis}></img>
                <p>{idioma[7].colaboraciones.tenis}</p>
            </div>
            <div className='colaboracion'>
                <img src={logo_tenis}></img>
                <p>{idioma[7].colaboraciones.volley}</p>
            </div>
        </div>
    </div>
    </>
  )
}
