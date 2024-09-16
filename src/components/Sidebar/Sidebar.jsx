import React, { useState } from 'react'
import "../Sidebar/Sidebar.css"
import Category from './Category/Category'
import Price from "./Prices/Prices.jsx"


export default function Sidebar() {

  return (

    <div className='sidebar'>
    <Category/>
    <Price/>
    </div>
  )
}
