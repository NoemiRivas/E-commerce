import React from 'react'
import "./Hero.css"
import hero from "../../Assets/img/hero_imagen.jpg"



export default function Hero() {
  return (
    <div className='hero'>
        <img src= {hero} alt="hombre-fitness" className='imagen-hero' />
      <div className="hero-rigth">
        <h1>Accesorios exclusivos para tu bienestar fisico.</h1>
        <h2>Personaliza tu entrenamiento
        con productos tecnologicos para incrementar tu performance</h2>
      
      <button className='btn-hero'>
        Ver tienda
      </button>
      </div>
    </div>
  )
}
