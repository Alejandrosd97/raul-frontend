import React from 'react'
import Navbar from './Navbar'
import masaje from '/src/assets/imgs/masaje.jpg'
import '../css/tratamientosPage.css'


export default function TratamientosPage() {
    return (
        <>
            <Navbar />
            <div className="contenedor-grande">
                <h2>NUESTROS TRATAMIENTOS</h2>
                <div className="tratamientos-contenedor">
                    <div className="tratamiento-detalle">
                        <div className="detalle-img-box left">
                            <img src={masaje} alt="" />
                        </div>
                        <div className="explicacion-detalle p-right">
                            <h4>TERAPIA MANUAL</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab</p>
                            <button>CONTACTAR</button>
                        </div>
                    </div>

                    <div className="tratamiento-detalle">
                        <div className="explicacion-detalle">
                            <h4>NOMBRE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab</p>
                            <button>CONTACTAR</button>

                        </div>
                        <div className="detalle-img-box">
                            <img src={masaje} alt="" />
                        </div>
                    </div>

                    <div className="tratamiento-detalle">
                        <div className="detalle-img-box left">
                            <img src={masaje} alt="" />
                        </div>
                        <div className="explicacion-detalle p-right">
                            <h4>NOMBRE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab</p>
                            <button>CONTACTAR</button>

                        </div>
                    </div>

                    <div className="tratamiento-detalle">
                        <div className="explicacion-detalle">
                            <h4>NOMBRE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab</p>
                            <button>CONTACTAR</button>

                        </div>
                        <div className="detalle-img-box">
                            <img src={masaje} alt="" />
                        </div>
                    </div>

                    <div className="tratamiento-detalle">
                        <div className="detalle-img-box left">
                            <img src={masaje} alt="" />
                        </div>
                        <div className="explicacion-detalle p-right">
                            <h4>NOMBRE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab</p>
                            <button>CONTACTAR</button>

                        </div>
                    </div>

                    <div className="tratamiento-detalle">
                        <div className="explicacion-detalle">
                            <h4>NOMBRE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur recusandae voluptatum amet veniam, at, dolorum atque unde ullam corrupti dignissimos velit repellat inventore? Debitis illum laudantium odit possimus ratione enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi vel cumque debitis illum? Incidunt voluptates alias explicabo? Commodi veniam corrupti sit earum veritatis officia sequi voluptatum nobis exercitationem ab.</p>
                            <button>CONTACTAR</button>

                        </div>
                        <div className="detalle-img-box">
                            <img src={masaje} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
