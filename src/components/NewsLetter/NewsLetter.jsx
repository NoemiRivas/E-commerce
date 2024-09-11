import React from 'react'
import "./NewsLetter.css"

export default function NewsLetter() {
  return (
    <div className='Newsletter'>
      <h1>¡Suscribete ahora mismo y no te pierdas de nada!</h1>
      <p>Recibe las ultimas novedades en descuentos y promociones de tus gadgets favoritos</p>
      <div>
      <input type="email" placeholder='email' />
      <button>Suscribirse ya</button>
       </div> 
    </div>
  )
}
