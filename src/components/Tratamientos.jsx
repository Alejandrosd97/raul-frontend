import {React, useContext} from 'react'
import '../css/tratamientoNuevo.css'
import masaje from '/src/assets/imgs/masaje.jpg'
import ejercicio from '/src/assets/imgs/ejercicio.jpg'
import osteopatia from '/src/assets/imgs/osteopatia.jpg'
import acupuntura from '/src/assets/imgs/acupuntura.jpg'


import Carta from './Carta'
// import TratamientoNuevo from './TratamientoNuevo'
import { IdiomaContext } from '../App'



function Tratamientos(){
    const {idioma} = useContext(IdiomaContext)
    

    return(
        <section id='tratamientos'>
            <h2>{idioma[2].titulos.tratamientos}</h2>
            <p className='tratamientosTexto'>
                {idioma[3].tratamientos[0].texto}
            </p>
            <div className='tratamientos-bloque'>
                {/* <TratamientoNuevo imagen={masaje} texto={idioma[3].tratamientos[0]}/>
                <TratamientoNuevo imagen={acupuntura} texto={idioma[3].tratamientos[1]}/>
                <TratamientoNuevo imagen={osteopatia} texto={idioma[3].tratamientos[2]}/>
                <TratamientoNuevo imagen={fisioestetica} texto={idioma[3].tratamientos[3]}/> */}
                <div className="fila">
                    <Carta fade={'fade-right'} imagen={masaje} texto={idioma[3].tratamientos[1]}/>
                    <Carta fade={'fade-left'} imagen={acupuntura} texto={idioma[3].tratamientos[2]}/>
                </div>

                <div className="fila">
                    <Carta fade={'fade-right'} imagen={osteopatia} texto={idioma[3].tratamientos[3]}/>
                <Carta fade={'fade-left'} imagen={ejercicio} texto={idioma[3].tratamientos[4]}/>
                </div>
                
                



            </div>
        </section>
        

    )
}

export default Tratamientos