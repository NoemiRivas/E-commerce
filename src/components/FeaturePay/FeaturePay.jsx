import React from 'react'
import DeliveryIcon from '../Assets/svg/DeliveryIcon'
import CardPaymentsIcon from '../Assets/svg/CardPaymentsIcon'
import FastDelivery from "../Assets/svg/FastDelivery"
import "./FeaturePay.css"


export default function FeaturePay() {
  return (
    <div className='features'>
      <div className='delivery'>
        <DeliveryIcon style={{ color: "#fff" }} />
        <h2>Conseña gratuita</h2>
        <p className='price-delivery'>"Únicamente para ordenes superiores a 59$"</p>
      </div>
      <div className='ease-pay'>
        <CardPaymentsIcon className="icon"/>
      <h2>Pagamento flexible</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
      </div>
      <div className='fast-delivery'>
        <FastDelivery className="icon"/>
      <h2>Envio rapido y seguro</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}