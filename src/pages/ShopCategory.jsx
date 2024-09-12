import { useContext } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext} from "../context/ShopContext"
import Items from "../components/Items/Items"
import React from 'react'
import banner from "../Assets/img/banner-2.png"
import Down_arrow from "../components/Assets/svg/Down_arrow"


export default function ShopCategory(props) {

  const {data_product} = useContext(ShopContext)

  return (
    <div className="shop-category">
      <sidebar className="sidebar">
        <div className="products-on">
          <h2>productos en el carrito</h2>
        <p>"No has agregado ningun producto"</p>
        </div>
        <hr/>
        <div className="filterprice">
          <h2>filtrar precio</h2>
          <ul>
            <li className="price">$0 - $199</li>
            <li className="price">$199 - $300</li>
            <li className="price">$300 - $500</li>
          </ul>
        </div>
        <hr/>
        <div className="categories">
          <h2>Categorias</h2>
          <ul>
            <li className="titles-categories"> relojes inteligentes</li>
            <li className="titles-categories"> auricolares inalambricos</li>
            <li className="titles-categories"> zapatillas inteligentes</li>
            <li className="titles-categories"> balazas digitales</li>
            <li className="titles-categories"> anillos inteligentes</li>
            <li className="titles-categories"> accesorios inteligentes</li>
          </ul>
        </div>
      </sidebar>
    </div>
  )
}
