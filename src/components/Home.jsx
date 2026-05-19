import React, { useContext } from 'react';
import { MyContext } from '../context/context';



function Home() {

  let data=useContext(MyContext);
  return (
    <div>
      <h1>Home</h1>
      <h1>{data}</h1>
    </div>
  )
}

export default Home