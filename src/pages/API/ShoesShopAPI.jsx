import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function ShoesShopAPI() {

  let [arrShoes, setArrShoes] = useState([]);

  //! phải ở luồng mounting -> didmount
  useEffect(() => {
    // call api
    getShoesList();
  }, []);

  let getShoesList = () => {
    // call api

    let promise = axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product"
    });

    // thanh cong
    promise.then((result) => {
      // console.log(result.data.content);
      setArrShoes(result.data.content);
    });

    // that bai
    promise.catch((error) => {
      console.log(error);
    });

  }


  let renderShoesList = () => {
    return arrShoes.map((shoes) => {
      return <div className="col-3" key={shoes.id}>
              <div className="card" >
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{shoes.name}</h5>
                  <p className="card-text">{shoes.shortDescription}</p>
                </div>
              </div>
            </div>
    });
  }


  return (
    <div className='container'>
      <h2>Shoes Shop</h2>

      <button onClick={getShoesList} className='btn btn-danger'>Get Shoes List</button>

      <div className="row">

        {renderShoesList()}

      </div>

    </div>
  )
}
