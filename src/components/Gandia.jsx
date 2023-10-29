import React, { useEffect, useContext } from 'react'
import '../css/gandia.css'
import clinica_gandia2 from '/src/assets/imgs/clinica_iphone.jpg'
import clinica_gandia3 from '/src/assets/imgs/clinica_fuera.jpg'
import clinica_gandia4 from '/src/assets/imgs/clinica_nueva_3.jpg'
import clinica_gandia5 from '/src/assets/imgs/clinica_nueva_1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsWhatsapp } from "react-icons/bs" 



import { IdiomaContext } from '../App'



 



function Gandia() {

    const {idioma} = useContext(IdiomaContext)

    const [index, setIndex] = React.useState(0)
    const arrayFotos = [clinica_gandia5, clinica_gandia4, clinica_gandia2, clinica_gandia3]


    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    function cambioFoto() {

        setIndex(function(prevIndex){
            if (prevIndex < arrayFotos.length -1 ){
                return prevIndex + 1
                
            }else {
                return 0
            }
        })
        setTimeout(cambioFoto, 5000)
    }

    useEffect(() => {
    const timer = setTimeout(() => {
      cambioFoto()
    }, 5000);

    return () => clearTimeout(timer);
  }, [])
    

    return (
        <>  
        <h2 id='clinicas'>{idioma[2].titulos.nuestrasClinicas}</h2>

        <section className='gandia'>

            <div data-aos='fade-left' className='clinica-gandia'>
                <div className='carrusel-gandia'>
                    {/* <button onClick={fotoAnterior} className='arrow left'>&#10229;</button> */}
                    <img src={arrayFotos[index]} />
                    {/* <button onClick={siguienteFoto} className='arrow right'>&#10229;</button> */}
                </div>

                <div className='descripcion-gandia'>
                    <div className='desc-gandia'>
                        <h3>Playa de Gandia</h3>
                        <p>{idioma[1].clinicas[0].clinicaGandiaDireccion}
                        </p>
                        <p className='smaller-gandia'><span className='horario'>{idioma[1].clinicas[0].clinicaGandiaHorario}</span>
                            <br />
                            {idioma[1].clinicas[0].clinicaGandiaTardes}: <span className='bold'>15h-20h</span>
                            <br />
                            {idioma[1].clinicas[0].clinicaGandiaMananas}: <span className='bold'>9h-13h</span>
                            <br />
                            {idioma[1].clinicas[0].clinicaGandiaTelefono} <span className='bold'>666 33 83 08</span>
                        </p>
                        <div className='gandia-btns'>
                        <a className='boton-mapa-gandia' href="#mapa">{idioma[1].clinicas[0].clinicaGandiaComoLlegar}</a>
                        <a className='boton-whats' href="https://wa.me/34675644493"><BsWhatsapp/>Contacta por Whatsapp</a>
                        </div>
                        {/* <a className='whats-link' href="https://wa.me/34675644493" target='_blank'><button className='whats-btn'><BsWhatsapp/>Contacta por Whatsapp</button></a> */}

                    </div>
                </div>
            </div>
        </section>
        </>
              
    )
}

export default Gandia