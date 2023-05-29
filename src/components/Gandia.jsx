import React, { useEffect, useContext } from 'react'
import '../css/gandia.css'
import clinica_gandia2 from '/src/assets/imgs/clinica_iphone.jpg'
import clinica_gandia3 from '/src/assets/imgs/clinica_fuera.jpg'

import { IdiomaContext } from '../App'

 



function Gandia() {

    const {idioma} = useContext(IdiomaContext)

    const [index, setIndex] = React.useState(0)
    const arrayFotos = [clinica_gandia2, clinica_gandia3]


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

            <div className='clinica-gandia'>
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
                        <a className='boton-mapa-gandia' href="#mapa">{idioma[1].clinicas[0].clinicaGandiaComoLlegar}</a>
                    </div>
                </div>
            </div>
        </section>
        </>
              
    )
}

export default Gandia