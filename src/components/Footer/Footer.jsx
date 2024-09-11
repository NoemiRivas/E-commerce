import React, { useState } from 'react'
import "./Footer.css"
import Facebook from '../Assets/svg/Facebook'
import Istagram from '../Assets/svg/Istagram'
import Pinterest from '../Assets/svg/Pinterest'
import { Link } from 'react-router-dom'


export default function Footer() {
const [footerMenu,setFooterMenu] = useState("inicio")
const [legalLinks,setLegalLink] = useState("servicios")
  return (
    <div className='footer'>
        <div className='items-media'>
        <Facebook/>
        <Istagram/>
        <Pinterest/>
        </div>
        <hr/>
        <div className='layout-nav-footer'>
        <div className='logo'>
            <h1>Tech<span className='blue'>F</span>ith</h1>
            <h2>La tecnologia a favor de tu salud</h2>
            <p>Ipsa quae ab illo inventore veritatis et quasi sunt explicabo. 
                Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                <span className='allreserved'>
                © 2024. All rights reserved.
                </span>
            </div>

        <div className='links-footer'>
            <h2>links</h2>   
        <ul>   
            <li onClick={()=>{setFooterMenu("inicio")}}><Link to ="/">Inicio</Link></li>
            <li onClick={()=>{setFooterMenu("productos")}}><Link to ="/productos" >Productos</Link></li>
            <li onClick={()=>{setFooterMenu("blog")}}><Link to = "/blog">Blog</Link></li>
            <li onClick={()=>{setFooterMenu("acerca-de")}}><Link to = "/acerca-de">About</Link></li>
            <li onClick={()=>{setFooterMenu("contacto")}}><Link to = "/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className='links-footer'>
            <h2>legal</h2>       
            <ul>
                <li onClick={()=> {setLegalLink("servicios")}}><Link to = "servicios">Servicios</Link> </li>
                <li onClick={()=> {setLegalLink("terminos-y-condiciones")}}><Link to = "terminos-y-condiciones">terminos y condiciones</Link> </li>
                <li onClick={()=> {setLegalLink("politica-de-reembolso")}}><Link to = "politica-de-reembolso">politica de reembolso</Link></li>
                <li onClick={()=> {setLegalLink("Politica-de-cookies")}}><Link to = "Politica-de-cookies">Politica de cookies</Link></li>
            </ul>
        </div>
        <div className='links-footer'>
            <h2>contacto</h2>
            <p>
            Location:123, New Lenox Chicago, IL 60606
            Email:info@example.com
            Phone:123-456-7890  
            </p>

        </div> 
        </div>   
    </div>
  )
}
