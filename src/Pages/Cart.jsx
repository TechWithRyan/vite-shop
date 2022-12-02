import React from 'react'
import '../App.css' 
import A1 from '../../images/A1.jpeg'

function Cart() {
  return (

    <div className="cart-container">
        <div className="cart-wrapper">
          <div className="cart-title">Cart</div>
          <div className="cart-item">
            <div className="cart-thumbnail">
            <img src={A1} width="250px" height="200px" />
            </div>
            <div className="cart-product">Shoes</div>
            <div className="cart-price">$200</div>

          </div>
        </div>
    </div>
  )
}

export default Cart