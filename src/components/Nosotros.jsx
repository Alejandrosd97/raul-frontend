import { React, useContext } from 'react'
import '../css/nosotros.css'
import fotoRaul from '../assets/imgs/foto_raul.jpg'
import { IdiomaContext } from '../App'


function Nosotros() {
    const { idioma } = useContext(IdiomaContext)


    return (
        <section id='sobre-nosotros'>
            <div className='sobre-nosotros'>
            <h2>{idioma[2].titulos.sobreNosotros}</h2>
            <p className='textoNosotros'>
                {idioma[5].fisios[0].texto}
            </p>
            <div className='nosotros'>
                <div className="fisio-nuevo">
                    <div className="img-fisio">
                        <img src={fotoRaul}></img>
                    </div>
                    <div className="info-fisio">
                        <span>Nº Colegiado 1234</span>
                        <h3>RAÚL MANZANO ROMERO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure sint sapiente. Aliquid, maiores perferendis, culpa, quia commodi eaque repellat beatae quo facilis dolorem veniam ratione tempore consequuntur excepturi voluptates!</p>
                    </div>
                </div>

                <div className="fisio-nuevo">
                    <div className="img-fisio">
                        <img src={fotoRaul}></img>
                    </div>
                    <div className="info-fisio">
                        <span>Nº Colegiado 1234</span>
                        <h3>RAÚL MANZANO ROMERO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure sint sapiente. Aliquid, maiores perferendis, culpa, quia commodi eaque repellat beatae quo facilis dolorem veniam ratione tempore consequuntur excepturi voluptates!</p>
                    </div>
                </div>
            </div>

            <div className='idiomas-info'>
                <div className='titulos'>
                <h5 className='azul'>
                    WIR SPRECHEN DEUTSCH!
                </h5>
                <h5 className='azul'>
                    WE SPEAK ENGLISH!
                </h5>
                </div>
                
                <div className='deutsch-texto'>
                    <p>En Raulfisio, entendemos la importancia de brindar una experiencia de tratamiento cómoda y accesible para nuestros <span className='azul'>pacientes de habla alemana e inglesa</span> . Nuestro equipo altamente capacitado está preparado para ofrecer <span className='azul'>servicios de fisioterapia en alemán e inglés</span> servicios de fisioterapia en alemán e inglés, asegurando una comunicación clara y efectiva. </p>
                    <p>Desde la evaluación inicial hasta la planificación del tratamiento y las sesiones de rehabilitación, nos esforzamos por crear un ambiente donde nuestros pacientes alemanes se sientan como en casa. La atención en alemán no es solo un servicio, es nuestro compromiso de proporcionar una experiencia de atención de calidad adaptada a las necesidades específicas de cada individuo. ¡Confía en nosotros para cuidar de tu bienestar en tu idioma nativo!</p>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Nosotros



