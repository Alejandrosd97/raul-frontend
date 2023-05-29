import React from 'react'
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
import Cookies from './Cookies'
import Colaboraciones from './Colaboraciones'




export default function MainPage() {

  const prueba = ()=>{
	  return JSON.parse(localStorage.getItem('idioma'))}

	
	const [idioma, setIdioma] = React.useState(prueba ? prueba :'español')

	let texto = textoEspanol
	if (idioma === 'ingles'){
		texto = textoIngles 
	}else if (idioma === 'aleman'){
		texto = textoAleman
	}else if(idioma === 'español'){
		texto = textoEspanol
	}
  return (
    <div>
      <Hero texto={texto} />
      <Gandia texto={texto}/>
      <Denia texto={texto}/>
      <Tratamientos/>
      {/* <Nosotros/> */}
      <Mapas/>
	  <Contact/>
	  {/* <Colaboraciones/> */}
	  <Cookies/>
    </div>
  )
}

