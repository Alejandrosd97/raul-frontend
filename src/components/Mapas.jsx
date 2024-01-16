import { React, useState, useEffect, useContext, useRef } from 'react'
import '../css/mapas.css'
import { IdiomaContext } from '../App'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Mapas() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const { idioma } = useContext(IdiomaContext)

    const [mapa, setMapa] = useState('gandia')

    function cambiarMapa(e) {
        setMapa(e.target.value)
    }

    const toggleButton = useRef()
    const gandiaButton = useRef()
    const deniaButton = useRef()

    var referencia
    var gandia
    var denia

    useEffect(() => {
        referencia = toggleButton.current
        gandia = gandiaButton.current
        denia = deniaButton.current
    }, [mapa]);



    function leftBtn(e) {
        referencia.style.left = '0'
        denia.style.color = '#004e98'
        gandia.style.color = 'white'
        gandia.style.transition = '0.5s'
        denia.style.transition = '0.5s'

        cambiarMapa(e)

    }

    function rightBtn(e) {
        cambiarMapa(e)
        referencia.style.left = '130px'
        denia.style.color = 'white'
        gandia.style.color = '#004e98'
        gandia.style.transition = '0.5s'
        denia.style.transition = '0.5s'
    }

    return (
        <section id='mapa' className='mapas'>
            <h2>{idioma[2].titulos.localizacion}</h2>
            <div className='cambiar-mapa'>


                <div className="btn-box">
                    <div className="toggle-btn-box">
                        <span id='btn' ref={toggleButton}></span>
                        <button ref={gandiaButton} value='gandia' className='toggle-btn' onClick={(e) => leftBtn(e)}>Gandia</button>
                        <button ref={deniaButton} value='denia' className='toggle-btn' style={{ 'color': '#004e98' }} onClick={(e) => rightBtn(e)}>Denia</button>
                    </div>
                </div>




                {/* <button 
                    className= {mapa === 'gandia' ? 'clicked' : 'not-clicked' }
                    onClick={(e)=>cambiarMapa(e)}
                    value='gandia'>
                    Gandía
                </button>
                <button
                    className={mapa === 'denia' ? 'clicked' : 'not-clicked' }
                    onClick={(e)=>cambiarMapa(e)}
                    value='denia'>
                    Denia
                </button> */}
            </div>


            <iframe data-aos='fade-right' src={mapa == 'gandia' ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.621014134565!2d-0.16603167549962305!3d39.001145056850575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61c2bc8269cd7d%3A0x317625f684921c8!2sCl%C3%ADnica%20Raulfisio!5e0!3m2!1ses!2ses!4v1672031722885!5m2!1ses!2ses"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.8691707663384!2d0.05732411470858772!3d38.85835165685102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1d623aa46e85%3A0x753b9c4067f0cacc!2sCl%C3%ADnica%20Raulfisio!5e0!3m2!1ses!2ses!4v1672029630191!5m2!1ses!2ses"}
                width="600"
                height="500"
                style={{ 'border': '0' }}
                allowFullScreen=''
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
    )
}

export default Mapas



