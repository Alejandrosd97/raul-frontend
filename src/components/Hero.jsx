import {React, useContext} from 'react'
import '../css/hero.css'
import clinica_iphone from '/src/assets/imgs/clinica_iphone.jpg'
import { IdiomaContext } from '../App'



function Hero(){
    const {idioma} = useContext(IdiomaContext)

    return(
        <div className='hero'>
          <div className='descripcion-hero'>
            <h2 className='titulo-principal'>Clínicas Raulfisio</h2>
            <p>{idioma[6].hero.main}</p>
            <p className='negrita'>We speak English!</p>
            <p className='negrita'>Wir sprechen Deutsch!</p>
            <a href="#tratamientos"><button className='hero-link'>{idioma[6].hero.consultarTratamientos}</button></a>
          </div>
          <img src={clinica_iphone} alt="" />
        </div>
        
        

    )
}

export default Hero 