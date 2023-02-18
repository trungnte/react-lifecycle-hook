import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { render } from '@testing-library/react';
/**
 * B1: Tạo UI UII(button call api, rowrr-col hiển thị sản phẩm)
 * B2: Tạo function call API (console log)
 * B3: render lại UI để hiển thị data lên UI UII=> lưu data vào state để
 * khi set state -> render
 * B4: làm sao để khi load web sẽ hiển thị sẵn dữ liệu từ API lên UI
 * 
 *  1. load ứng dụng lên
 *  2. khởi tạo state, hàm
 *  3. chạy return => render UI
 *  4. chạy useEffect code call API (didmount)
 *  5. setState (trong hàm call API) => render lại UI
 *  6. arrShoes có data mới
 *  7. binding lên UI
 * 
 * **/


export default function ShoesShopAwait() {

  let [arrShoes, setArrShoes] = useState([]);

  //! TODO: mounting-> load ung dung len (DidMount)
  // chay sau khi render xong UI, khi render lai UI se khong chay lai
  useEffect(() => {
    // code chay trong didmount
    getShoesList();
  }, [])


  //! hàm có xử lý bất đồng bộ thì đặt từ khoá async
  const getShoesList = async () => {

    //! await giúp trình duyệt chờ xử lý lấy xong dữ liệu rồi mới chạy tiếp code
    //! await chỉ dùng trong hàm có khai báo async

    try {
      // xử lý thành công
      let result = await axios({
        method: "GET",
        url: "https://shop.cyberlearn.vn/api/Product"
      });

      // console.log("result.data: ", result.data);
      // console.log("result.data.content: ", result.data.content);

      setArrShoes(result.data.content);

    } catch (error) {
      // thất bại
      console.log(error);
    }
    

  }


  const renderUI = () => {
    return arrShoes.map((item) => {
      return  <div className="col-4" key={item.id}>
                <div className="card" >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.shortDescription}</p>
                    </div>
                </div>
              </div>
    })
  }


  return (
    <div className='container'>
      <h2>Shoes Shop Await</h2>

      <button className='btn btn-danger' onClick={getShoesList}>Call API</button>
      <div className="row">
        {renderUI()}

      </div>

      

    </div>
  )
}
