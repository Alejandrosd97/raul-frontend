import {React, useContext} from 'react'
import '../css/nosotros.css'
import fotoRaul from '../assets/imgs/foto_raul.jpg'
import { IdiomaContext } from '../App'
import Fisioterapeuta from './Fisioterapeuta'


function Nosotros(){
    const {idioma} = useContext(IdiomaContext)

    
    return(
        <section id='sobre-nosotros'>
            <h2>{idioma[2].titulos.sobreNosotros}</h2>
            <p className='textoNosotros'>
               {idioma[5].fisios[0].texto} 
            </p>
            <div className='nosotros'>
                
                <Fisioterapeuta descripcion={idioma[5].fisios.raul} foto={fotoRaul}/>
            
            </div>
           

        </section>
    )
}

export default Nosotros



