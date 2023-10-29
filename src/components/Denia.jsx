import React, { useContext, useEffect } from 'react'
import '../css/denia.css'
import clinica_denia from '/src/assets/imgs/clinica_denia.jpg'
import clinica_denia2 from '/src/assets/imgs/clinica_denia2.jpg'
import clinica_denia3 from '/src/assets/imgs/clinica_denia3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsWhatsapp } from "react-icons/bs" 

import { IdiomaContext } from '../App'





function Denia(props){

    const {idioma} = useContext(IdiomaContext)

    const [index, setIndex] = React.useState(0)
    const arrayFotos = [clinica_denia, clinica_denia2, clinica_denia3 ]

    // function siguienteFoto(){
    //     setFoto  (function(){
    //         const indexActual = arrayFotos.indexOf(fotoActual)
    //         if (indexActual < arrayFotos.length -1 ){
    //             return arrayFotos[indexActual+1] 
    //         }else {
               
    //             return arrayFotos[0]
    //         }
    //     })
    // }

    // function fotoAnterior(){
    //     setFoto(function(){
    //         const indexActual = arrayFotos.indexOf(fotoActual)
    //         if (indexActual > 0){
    //             console.log(indexActual)
    //             return arrayFotos[indexActual -1]
    //         }else {
    //             console.log(arrayFotos.length -1)
    //             return arrayFotos[arrayFotos.length-1]
    //         }
    //     })
    //}

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





    const {texto, cambiarMapa}= props
    return(
        <section className='denia'>
            <div data-aos='fade-right' className='clinica-denia'>
                <div className='descripcion-denia'>
                    <div className='desc-denia'>
                        <h3>Denia</h3>
                        <p>
                            {idioma[1].clinicas[1].clinicaDeniaDireccion}
                        </p>
                        <p className='smaller-denia'>
                            <span className='horario'>{idioma[1].clinicas[0].clinicaGandiaHorario}</span>
                            <br/>
                            {idioma[1].clinicas[1].clinicaDeniaMananas}: <span className='bold'>8h-13h</span>
                            <br/>
                            {idioma[1].clinicas[0].clinicaGandiaTelefono} <span className='bold'>674 64 39 37</span>
                       </p>
                       <div className='denia-btns'>
                        <a className='boton-mapa-denia' href="#mapa">{idioma[1].clinicas[0].clinicaGandiaComoLlegar}</a>
                        <a className='boton-whats' href="https://wa.me/34675644493"><BsWhatsapp/>Contacta por Whatsapp</a>
                        </div>
                </div>
                </div>  
        
                <div className='carrusel-denia'>
                    {/* <button onClick={fotoAnterior} className='arrow left'>&#10229;</button> */}
                    <img src = {arrayFotos[index]}/>
                    {/* <button onClick={siguienteFoto} className='arrow right'>&#10229;</button> */}

                </div>

           
            </div>
        </section>
    )
}

export default Denia