import {React, useContext} from 'react'
import '../css/tratamientoNuevo.css'
import masaje from '/src/assets/imgs/masaje.jpg'
import fisioestetica from '/src/assets/imgs/fisioestetica.jpg'
import osteopatia from '/src/assets/imgs/osteopatia.jpg'
import acupuntura from '/src/assets/imgs/acupuntura.jpg'



import TratamientoNuevo from './TratamientoNuevo'
import { IdiomaContext } from '../App'



function Tratamientos(){
    const {idioma} = useContext(IdiomaContext)
    

    return(
        <section id='tratamientos'>
            <h2>{idioma[2].titulos.tratamientos}</h2>
            <div className='tratamientos-bloque'>
                <TratamientoNuevo imagen={masaje} texto={idioma[3].tratamientos[0]}/>
                <TratamientoNuevo imagen={acupuntura} texto={idioma[3].tratamientos[1]}/>
                <TratamientoNuevo imagen={osteopatia} texto={idioma[3].tratamientos[2]}/>
                <TratamientoNuevo imagen={fisioestetica} texto={idioma[3].tratamientos[3]}/>

            </div>
        </section>
        

    )
}

export default Tratamientos