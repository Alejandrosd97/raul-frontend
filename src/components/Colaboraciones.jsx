import {React, useContext} from 'react'
import '../css/colaboraciones.css'
import logo_tenis from '/src/assets/imgs/tenisnuevo-rem.png'

import { IdiomaContext } from '../App'



export default function Colaboraciones() {
    const {idioma} = useContext(IdiomaContext)

   

  return ( 
    <>
    <h2>{idioma[7].colaboraciones.titulo}</h2>
    <div className='contenedor-colab'>
            <div className='colaboracion'>
              <div class='foto-container'>
                <img src={logo_tenis}></img>
              </div>
      
              <div class='texto-colaboracion'>
                <p>{idioma[7].colaboraciones.texto}</p>
              </div>
           
        </div>
        </div>
    </>
  )
}
