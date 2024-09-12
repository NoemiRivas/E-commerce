import React from 'react'
import "./NewProduct.css"
import data_product from '../Assets/svg/data_product'
import Items from "../Items/Items"

export default function NewProduct() {
  return (
    <div className='newProducts'>

      <div className="new-products">
            <h1>
        Nuevos Productos
      </h1>
      <hr/>
      </div>
      <div className="item-product">
        {data_product.map((item, i)=> {
            return <Items key={i} id= {item.id} name= {item.name} image= {item.image} price={item.price} />
        })}
      </div>
    </div>
  )
}
