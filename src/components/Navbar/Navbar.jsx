import React from 'react'
import "./Navbar.css"
import  { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const [menu,setMenu] = useState("Inicio")

  return (
    <div className='navbar'>
        <div className='nav-menu'>
          <ul>
            <li onClick={()=>{setMenu("inicio")}}><Link to ="/">Inicio</Link> {menu === "inicio" ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("productos")}}><Link to ="/productos" >Productos</Link>{menu === "productos" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("blog")}}><Link to = "/blog">Blog</Link>{menu === "blog" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("acerca-de")}}><Link to = "/acerca-de">About</Link>{menu === "acerca-de" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("contacto")}}><Link to = "/contacto">Contacto</Link>{menu === "contacto" ? <hr/> : <></>}</li>
          </ul>
        </div>
    </div>
  )
}
