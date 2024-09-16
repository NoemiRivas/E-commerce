import React from 'react'
import "./Item.css"
//mostrar cada producto
export default function Items(props) {
  return (
    <div className='item'>
    
      <img src= {props.image} alt="product" />
      <p> {props.name} </p>
      <div className='item-price'>
        ${props. price}
      </div>
      <button className="btn-price">
        Comprar
      </button>
    </div>
  )
}
