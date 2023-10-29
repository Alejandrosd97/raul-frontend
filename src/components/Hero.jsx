import {React, useContext, useEffect} from 'react'
import '../css/hero.css'
import clinica_iphone from '/src/assets/imgs/clinica_iphone.jpg'
import { IdiomaContext } from '../App'
import { Parallax } from 'react-parallax'
import AOS from 'aos'
import 'aos/dist/aos.css'

 

function Hero(){
    const {idioma} = useContext(IdiomaContext)

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return( 
        <div className='hero' >
          <div className='descripcion-hero' data-aos='fade-right'>
            <h2 className='titulo-principal'>Clínicas Raulfisio</h2>
            <p>{idioma[6].hero.main}</p>
            <p className='negrita'>We speak English!</p>
            <p className='negrita'>Wir sprechen Deutsch!</p>
            <a className='hero-link' href="#tratamientos">{idioma[6].hero.consultarTratamientos}</a>
          </div>
          <Parallax className='image' bgImage={clinica_iphone} strength={200}>
            
          </Parallax>
        </div>

        

    )
}

export default Hero 