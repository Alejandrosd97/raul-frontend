import { React, useRef, useEffect } from 'react'
import '../css/cookies.css'
import Navbar from './Navbar'
import { CookiesProvider, useCookies } from "react-cookie";


export default function PoliticaCookies() {
    const [cookies, setCookie, removeCookie] = useCookies(["cookieConsent"]);

    const toggleButton = useRef()
    const permitirButton = useRef()
    const rechazarButton = useRef()

    var referencia
    var permitir
    var rechazar

    useEffect(() => {
        referencia = toggleButton.current
        permitir = permitirButton.current
        rechazar = rechazarButton.current

        console.log('ey')

        if (cookies.cookieConsent) {
            referencia.style.left = '0'
            console.log('si')
        }
        else {
            referencia.style.left = '130px'
            rechazar.style.color = 'white'
            permitir.style.color = '#004e98'
            permitir.style.transition = 'none'

            console.log(referencia.style)
            console.log('no')
        }
    }, []);

    function permitirBtn(e) {

        setCookie('cookieConsent', true, { path: '/' })

        referencia.style.left = '0'
        rechazar.style.color = '#004e98'
        permitir.style.color = 'white'
        permitir.style.transition = '0.5s'
        rechazar.style.transition = '0.5s'

        window.location.reload()
    }

    function rechazarBtn(e) {

        removeCookie('cookieConsent')

        referencia.style.left = '130px'
        rechazar.style.color = 'white'
        permitir.style.color = '#004e98'
        permitir.style.transition = '0.5s'
        rechazar.style.transition = '0.5s'

        window.location.reload()
    }

    return (
        <div>
            <Navbar />
            <div className="contenedor-grande">
                <div className="cookies-container">
                    <h1>POLÍTICA DE COOKIES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda, minus excepturi inventore sint ad corporis sunt cum officia esse porro, minima dolorum sequi consequatur exercitationem laboriosam quis quaerat nisi?</p>
                    <div className="btn-box">
                        <div className="toggle-btn-box">
                            <span id='btn' ref={toggleButton}></span>
                            <button ref={permitirButton} className='toggle-btn' onClick={(e) => permitirBtn(e)}>Permitir</button>
                            <button ref={rechazarButton} className='toggle-btn' style={{ 'color': '#004e98' }} onClick={(e) => rechazarBtn(e)}>Rechazar</button>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda, minus excepturi inventore sint ad corporis sunt cum officia esse porro, minima dolorum sequi consequatur exercitationem laboriosam quis quaerat nisi?</p>
                </div>
            </div>
        </div>
    )
}
