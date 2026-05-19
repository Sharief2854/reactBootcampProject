import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function UserHome() {

  const [products, setproducts] = useState([]);

  let navigate=useNavigate();

  async function getData(){
    let res=await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setproducts(res.data);
  }

  let result=products.map((item,ind)=>{
    return(
        <div className='card' key={item.id}>
            <img src={item.image} alt="" className='image'/>
            <h1>{item.title}</h1>
            <h5>{item.category}</h5>
            <h1>Rs.{item.price}</h1>
            <button>Add to cart</button>
        <button onClick={() => navigate(`/userDashboard/productDetails/${item.id}`)}>open</button>
        </div>
    )
  });

  useEffect(()=>{
      getData();
  },[]);
  return (
    <div>
      <h1>Products</h1>
      <div className='container'>
        {result}
      </div>
    </div>
  )
}

export default UserHome