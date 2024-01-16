import { React, useContext } from 'react'
import '../css/tenis.css'
//import logo_tenis from '/src/assets/imgs/tenisnuevo-rem.png'

import { IdiomaContext } from '../App'



export default function Colaboraciones() {
    const { idioma } = useContext(IdiomaContext)



    return (
        <>
            <h2>{idioma[7].colaboraciones.titulo}</h2>
            <div className='contenedor-colab'>
                <p className='tenis-text'>En RaulFisio, nos enorgullece anunciar nuestra colaboración con el Club de Tenis de Gandia. Ofrecemos servicios de fisioterapia durante los torneos en el club, brindando atención de primer nivel a los atletas. Nuestros fisioterapeutas estarán presente para mantener el rendimiento y tratar lesiones. Esto refleja nuestro compromiso con la comunidad deportiva de Gandia, siendo un recurso confiable en el Club de Tenis de Gandia.</p>
            </div>
        </>
    )
}
