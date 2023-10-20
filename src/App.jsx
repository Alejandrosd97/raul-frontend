import './css/App.css'
import {React, useState, useContext, createContext} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import Login from './components/Login'
import PoliticaPrivacidad from './components/PoliticaPrivacidad'
import textoEspanol from './assets/dataEspanol'
import textoAleman from './assets/dataAleman'
import textoIngles from './assets/dataIngles'
import raul_logo from './assets/imgs/raul_logo.png'


export const IdiomaContext = createContext()

export default function App() {

	const [lang, setLang] = useState('espanol')
	const [isAdmin, setIsAdmin]= useState(false)

	function cambiarIdioma(e){
		setLang(e.target.value)
	}

	let idioma
	if (lang === 'ingles'){
		idioma = textoIngles
	}else if (lang === 'aleman'){
		idioma = textoAleman
	}else{
		idioma = textoEspanol
	}
	

	return(
		<>
		
		{/* esto iria debajo del idiomacontext <Navbar cambiarIdioma={cambiarIdioma}/> */}
		<IdiomaContext.Provider value={{idioma, isAdmin, setIsAdmin, cambiarIdioma}}>
			
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/blog' element={<Blog/>}/>
				<Route path='/blog/post/:postId' element={<BlogDetail/>} />	
				<Route path='/blog/post/write' element={<CreatePost/>} />	
				<Route path='/blog/post/edit/:postId' element={<UpdatePost/>} />	
				<Route path='/login' element={<Login/>}/>
				<Route path='/privacidad' element={<PoliticaPrivacidad/>} />	
			</Routes>
			<Footer/>
		</IdiomaContext.Provider>

	</>
	)
	}

