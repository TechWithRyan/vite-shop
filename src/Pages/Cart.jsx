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
            <img src={A1}  />
              </div>
                <div className="main-container">

                <div className="cart-product">Shoes</div>
                <div className="cart-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ratione excepturi blanditiis fugit delectus, quasi obcaecati eius sunt ad sed illum nam distinctio voluptates, in quos? Enim velit quo a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, labore. Voluptatum odit at iusto eos, illum doloribus distinctio eligendi repellendus nesciunt iste quo recusandae perspiciatis, consectetur qui necessitatibus iure fugiat?</div>
                <div className="cart-price">$200</div>
              </div>
          </div>
            
        </div>
    </div>
  )
}

export default Cart