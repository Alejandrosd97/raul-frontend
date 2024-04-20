import { React, useContext } from 'react'
import Hero from './Hero'
import Gandia from './Gandia'
import Denia from './Denia'
import Mapas from './Mapas'
import Tratamientos from './Tratamientos'
import Nosotros from './Nosotros'
import textoEspanol from '../assets/dataEspanol'
import textoIngles from '../assets/dataIngles'
import textoAleman from '../assets/dataAleman'
import Contact from './Contact'
import Navbar from './Navbar'
import Tenis from './Tenis'
import Idiomas from './Idiomas'
import Whatsapp from './Whatsapp'
import CookiesBaner from './CookiesBaner'
import { useCookies } from "react-cookie";
import { IdiomaContext } from '../App'






export default function MainPage() {


	const { idioma } = useContext(IdiomaContext)
	const [cookies, setCookie] = useCookies(["cookieConsent"]);


	// const [idioma, setIdioma] = React.useState(idiomaCookie ? idiomaCookie : 'español')



	let texto = textoEspanol
	if (idioma === 'ingles') {
		texto = textoIngles
	} else if (idioma === 'aleman') {
		texto = textoAleman
	} else if (idioma === 'español') {
		texto = textoEspanol
	}
	return (
		<div>
			<Navbar />
			<Hero texto={texto} />
			<Gandia texto={texto} />
			<Denia texto={texto} />
			<Tratamientos />
			<Nosotros />
			<Idiomas/>
			<Tenis />
			<Mapas />
			<Contact />
			<Whatsapp />
			{!cookies.cookieConsent && <CookiesBaner />}

		</div>
	)
}

