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
            <div className='colaboracion'>
                <img src={logo_tenis}></img>
                {/* <p>{idioma[7].colaboraciones.tenis}</p> */}
            
            <div><p>En RaulFisio, estamos orgullosos de anunciar nuestra emocionante colaboración con el prestigioso Club de Tenis de Gandia. Como parte de este acuerdo, ofrecemos servicios de fisioterapia especializados durante los torneos que se celebran en las instalaciones del club.

Nuestro equipo de fisioterapeutas altamente calificados estará presente en los eventos para proporcionar atención de primera clase a los atletas y participantes. Estamos comprometidos en ayudar a los jugadores de tenis a mantener su rendimiento en su mejor nivel y a manejar cualquier lesión o molestia que puedan experimentar durante el torneo.

Esta colaboración representa nuestro compromiso continuo con la comunidad deportiva de Gandia y nuestra pasión por contribuir al bienestar de los atletas locales. Esperamos seguir siendo un recurso confiable para la salud y el rendimiento de los jugadores de tenis en el Club de Tenis de Gandia.</p></div>
            {/* <div className='colaboracion'>
                <img src={logo_tenis}></img>
                <p>{idioma[7].colaboraciones.volley}</p>
            </div> */}
        </div>
        </div>
    </>
  )
}
