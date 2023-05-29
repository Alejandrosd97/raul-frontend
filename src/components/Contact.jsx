import {React, useState, useContext} from 'react'
import '../css/contact.css'

import { IdiomaContext } from '../App'
import { Link } from 'react-router-dom'



export default function Form() {
    const {idioma} = useContext(IdiomaContext)

    const [focus1, setFocus1] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const [focus3, setFocus3] = useState(false)

  return ( 
    <div className='contenedor-contacto'>
        <h2 className='titulo'>{idioma[4].contacto.titulo}</h2>
        <p>{idioma[4].contacto.parrafo}</p> 
        <form className='form' method='post' action='https://getform.io/f/f3349849-52ca-4dcf-9786-8471339871a0'>
            <div className='columna'>
                <input name='nombre' type="text" required={true} />
                <span >Nombre</span>

            </div>
            <div className='columna'>
                <input name='email' type="email" required={true}/>
                <span>Email</span>
            </div>
            <div className='columna'>
                <textarea required={true} name='mensaje' id="question"></textarea>
                <span className='textarea-span'>Mensaje</span>
            </div>
            <div className='privacidad'>
                <input type='checkbox' required={true} id="consentimiento"></input>
                <p>He leído y acepto <Link to={'/privacidad'}>la politica de privacidad</Link></p>
            </div>
            <button type='submit' className='contact-button'>{idioma[4].contacto.enviar}</button>
        </form>
    </div>
  )
}
