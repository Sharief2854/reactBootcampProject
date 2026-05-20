import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

    let cart=useSelector((state)=>state.cart.cart);
    let totalPrice = useSelector((state) => state.cart.totalPrice);

    console.log(cart);
    let result=cart.map((item,ind)=>{
        return(
            <div className='cartItem' key={item.id}>
                <div className='image-container'>
                    <img src={item.image} alt="" />
                </div>
                <p>
                    {item.title}
                </p>
                <h1>
                    Rs.{item.price}
                </h1>
            </div>
        )
    });
  return (
    <div className='cart-container'>
           <div>
              {result}
           </div>
            <div>
                <h1>Total Price = {totalPrice}</h1>
              <button
                  onClick={() => { alert("order placed successfully") }}
              >
                  Buy Now
              </button>
            </div>
    </div>
  )
}

export default Cart