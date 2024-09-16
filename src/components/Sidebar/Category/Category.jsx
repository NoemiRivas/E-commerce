import React from 'react'
import "../Category/Category.css"

export default function Category() {
  return (
    <div>
      <h2 className="categories-component">
        <div >
            <label className="sidebar-label-container" >
                <input type="radio" name='test' />
                <span className='checkmark'></span><h2>Relojes Inteligentes</h2>
            </label>
            <label className="sidebar-label-container" >
                <input type="radio" name='test' />
                <span className='checkmark'></span><h2>Auricolares Inalambricos</h2>
            </label>
            <label className="sidebar-label-container" >
                <input type="radio" name='test' />
                <span className='checkmark'></span><h2>Calzado Inteligente</h2>
            </label>
            <label className="sidebar-label-container" >
                <input type="radio" name='test' />
                <span className='checkmark'></span><h2>Accesorios Inteligentes</h2> 
            </label>

        </div>
      </h2>
    </div>
  )
}
