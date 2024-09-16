import { useContext, useState } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext} from "../context/ShopContext"
import Items from "../components/Items/Items"
import React from 'react'
import banner from "../Assets/img/banner-2.png"
import Down_arrow from "../components/Assets/svg/Down_arrow"
import Sidebar from "../components/Sidebar/Sidebar"

/** shop-category: busca los productos por categoria*/

export default function ShopCategory(props) {

  const {data_product} = useContext(ShopContext)
  const {filterCartegory, setFilterCategory} = useState(data_product);

  return (
    <div className="shop-category">
   
      <img src= {props.banner} alt="banner-product" className="banner"/>
         <Sidebar/>
        <div className="shopcategory-indexsort">
          <p>
            <span>
             1-2
            </span> ver 24
          </p>
        </div>
        <div className="shop-category">
        {data_product.map((item, i) => {
          if (props.category===item.category) {
            return <Items key={i} id= {item.id} name= {item.name} image= {item.image} price={item.price} />
          }else if (props.price===item.price) {
            return  <Items key={i} id= {item.id} name= {item.name} image= {item.image} price={item.price} />
          }else{
            return <Items key={i} id= {item.id} name= {item.name} image= {item.image} price={item.price} />
          }
        })}
        </div>
        

    </div>
  )
}
