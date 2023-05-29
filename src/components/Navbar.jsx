import {React, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import raul_logo from '/src/assets/imgs/raul_logo.png'
import '../css/navbar.css'
import { IdiomaContext } from '../App'




function Navbar(props){
    const {idioma} = useContext(IdiomaContext)
    const [menu, setMenu] = useState(false)

    function toggleMenu(){
        setMenu(prev => !prev)
    }


    return(
        <nav className='nav'>
            <div className='nav-container'>
                <Link to='/'>
                    <img className='logo-principal'src={raul_logo}/>
                </Link>
                <div className='idiomas'>
                    <div className='banderas'>
                    <div>
                        <button className='bandera alemania'
                            value='aleman'
                            // onClick={(e)=>props.cambiarIdioma(e)}
                            >
                        </button>
                    </div>

                    <div>
                        <button className='bandera inglesa' 
                            value='ingles'
                            // onClick={(e)=>props.cambiarIdioma(e)}
                            >
                        </button>
                    </div>

                    <div>
                        <button className='bandera espana'
                            value='español'
                            // onClick={(e)=>props.cambiarIdioma(e)}
                            >
                        </button>
                    </div>
                    </div>

                    <div>
                        <button className={menu ? 'cancelar': 'hamburger'}
                            onClick={toggleMenu}>
                        </button>
                    </div>
                </div>
            

                
                <ul id='navbar-ul' className={menu ? 'active': ''}>
                    {/* <Link className='nav-blog' to='/blog'>
                        <li onClick={window.innerWidth < 980 ? toggleMenu : null}>Blog</li>
                    </Link>
                    <Link className='nav-blog' to='/pacientes'>
                        <li onClick={window.innerWidth < 980 ? toggleMenu : null}>{idioma[0].navbar.pacientes}</li>
                    </Link> */}
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#clinicas'>{idioma[0].navbar.clinicas}</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#tratamientos'>{idioma[0].navbar.tratamientos}</a></li>
                    {/* <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#sobre-nosotros'>{idioma[0].navbar.sobreNosotros}</a></li> */}
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#mapa'>{idioma[0].navbar.comoLlegar}</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar