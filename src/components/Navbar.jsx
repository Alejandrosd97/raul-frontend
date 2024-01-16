import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import raul_logo from '/src/assets/imgs/raul_logo.png'
import '../css/navbar.css'
import { IdiomaContext } from '../App'
import textoEspanol from '../assets/dataEspanol'
import textoAleman from '../assets/dataAleman'
import textoIngles from '../assets/dataIngles'




function Navbar(props) {
    const { idioma, cambiarIdioma } = useContext(IdiomaContext)
    const [menu, setMenu] = useState(false)
    // const [lang, setLang] = useState('espanol')


    function toggleMenu() {
        setMenu(prev => !prev)
    }


    return (
        <nav className='nav'>
            <div className='nav-container'>
                <Link to='/'>
                    <img className='logo-principal' src={raul_logo} />
                </Link>
                <div className='idiomas'>
                    <div className='banderas'>
                        <div>
                            <button className='bandera alemania'
                                value='aleman'
                                onClick={(e) => cambiarIdioma(e)}
                            >
                            </button>
                        </div>

                        <div>
                            <button className='bandera inglesa'
                                value='ingles'
                                onClick={(e) => cambiarIdioma(e)}
                            >
                            </button>
                        </div>

                        <div>
                            <button className='bandera espana'
                                value='español'
                                onClick={(e) => cambiarIdioma(e)}
                            >
                            </button>
                        </div>
                    </div>

                    <button onClick={toggleMenu} className={menu ? 'navbar-toggle-button-active' : 'navbar-toggle-button'}>
                        <div></div>
                        <div></div>
                        <div></div>

                        {/* <button className={menu ? 'cancelar' : 'hamburger'}
                            onClick={toggleMenu}>
                        </button> */}
                    </button>
                </div>



                <ul id='navbar-ul' className={menu ? 'active' : ''}>

                    <li className='navbar-li' onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#clinicas'>{idioma[0].navbar.clinicas}</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#tratamientos'>{idioma[0].navbar.tratamientos}</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#sobre-nosotros'>{idioma[0].navbar.sobreNosotros}</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#mapa'>{idioma[0].navbar.comoLlegar}</a></li>

                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><Link className='nav-blog' to='/blog'>Blog</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar