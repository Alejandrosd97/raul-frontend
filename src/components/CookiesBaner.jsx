import React from 'react'
import '../css/cookieBaner.css'
import { CookiesProvider, useCookies } from "react-cookie";


export default function CookiesBaner() {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);

    function consent() {
        setCookie('cookieConsent', true, { path: '/' })
    }

    return (
        <div className='banner'>
            <button onClick={consent}>aceptar</button>
        </div>
    )
}
