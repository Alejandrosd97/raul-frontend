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
            </div>

        </section>
    )
}

export default Nosotros



