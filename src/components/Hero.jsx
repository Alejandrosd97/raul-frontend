import { React, useContext, useEffect } from 'react'
import '../css/hero.css'
import { IdiomaContext } from '../App'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Hero() {
  const { idioma } = useContext(IdiomaContext)


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className='hero'>
      <div className='descripcion-hero' data-aos='fade-up'>
        <h2 className='titulo-principal'>Clínica Raulfisio</h2>
        <p className='subtitle'>{idioma[6].hero.main}</p> 
        <p className='negrita'>We speak English!</p>
        <p className='negrita'>Wir sprechen Deutsch!</p>
        <div className="main-buttons">
          <a className='hero-link' href="#tratamientos">{idioma[6].hero.consultarTratamientos}</a>
          <a className="hero-link-white" href='#sobreNosotros'>Sobre Nosotros</a>
        </div>

      </div>

    </div>



  )
}

export default Hero 