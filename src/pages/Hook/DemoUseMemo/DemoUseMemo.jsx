import React, { useState, useMemo } from 'react'
import Cart from './Cart';


//! đặt biến bên ngoài function, không bị tạo lại
// let cart = [
//   {id: 1, name: 'iphone', price: 1000},
//   {id: 2, name: 'htc phone', price: 2000},
//   {id: 3, name: 'lg phone', price: 3000}
// ];


export default function DemoUseMemo() {

  let [like, setLike] = useState(0);

  // khi render lai UI => tao lai bien cart (array) => tao lai dia chi o nho

  let cart = [
    {id: 1, name: 'iphone', price: 1000},
    {id: 2, name: 'htc phone', price: 2000},
    {id: 3, name: 'lg phone', price: 3000}
  ];

    // C2: luu cache dia chi cua bien array, object
  // let cartMemo = useMemo(() => {
  //   return cart
  // }, []);

   let cartMemo = useMemo(() => cart, []);

  return (
    <div className='container'>
      <div className="m-5">
        Like: {like}♥
        <br />
        <span style={{cursor: 'pointer', color: 'red', fontSize: 35}} onClick={()=>{
          setLike(like + 1);
        }}>♥</span>
        <br />
        <br />

        <Cart cart={cartMemo}/>
      </div>
    </div>
  )
}
