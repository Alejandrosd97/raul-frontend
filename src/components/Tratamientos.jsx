import { React, useContext } from 'react'
import '../css/tratamientoNuevo.css'
import masaje from '/src/assets/imgs/masaje.jpg'
import ejercicio from '/src/assets/imgs/ejercicio.jpg'
import osteopatia from '/src/assets/imgs/osteopatia.jpg'
import acupuntura from '/src/assets/imgs/acupuntura.jpg'


import Carta from './Carta'
import { IdiomaContext } from '../App'



function Tratamientos() {
    const { idioma } = useContext(IdiomaContext)


    return (
        <section id='tratamientos'>
            <h2>{idioma[2].titulos.tratamientos}</h2>
            <p className='tratamientosTexto'>
                {idioma[3].tratamientos[0].texto}
            </p>
            <div className='tratamientos-bloque'>

                <Carta imagen={masaje} texto={idioma[3].tratamientos[1]} />
                <Carta imagen={acupuntura} texto={idioma[3].tratamientos[2]} />
                <Carta imagen={acupuntura} texto={idioma[3].tratamientos[2]} />



                <Carta imagen={osteopatia} texto={idioma[3].tratamientos[3]} />
                <Carta imagen={ejercicio} texto={idioma[3].tratamientos[4]} />
                <Carta imagen={ejercicio} texto={idioma[3].tratamientos[4]} />






            </div>
        </section>


    )
}

export default Tratamientos