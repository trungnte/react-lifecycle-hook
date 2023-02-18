import { computeHeadingLevel } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

// ! những biến không gán lại giá trị ban đầu khi render lại UI thì đặt bên ngoài function
let arrLocation = [
  {
    id: "HCM",
    tenTP: "Hồ Chí Minh",
    danhSachQH: [
      {id:'Q001', name: "Quận 1"},
      {id:'Q002', name: "Quận 2"},
      {id:'Q003', name: "Quận 3"},
    ]
  },
  {
    id: "DN",
    tenTP: "Đà Nẵng",
    danhSachQH: [
      {id:'HC', name: "Hải Châu"},
      {id:'LC', name: "Liên Chiểu"},
      {id:'ST', name: "Sơn Trà"},
    ]
  }
]

let timeout = {};

export default function DemoUseEffect() {

  //! Updating => khi props, state thay đổi
  let [number, setNumber] = useState(0);
  let [like, setLike] = useState(0);

  let [arrQH, setQH] = useState([]);
  let [idTP, setTP] = useState("");

  // gọi call API, gọi các thư viện slick, count up => sau khi render xong UI
  // componentDidMount, componentDidUpdate (class component)
  //! Hook => useEffect (function component) -> đại diện cho nhiều phương thức của lifecycle

  // useEffect( () => {
  //   console.log("DemoUseEffect: componentDidMount -> expected after rendering!!!");
  //   console.log("DemoUseEffect: componentDidUpdate -> expected after rendering!!!");
  
  //   //! TODO: không nên gọi setState ở componentDidMount và componentDidUpdate
  //   // if(like < 100) {
  //   //   setLike(like + 1);
  //   // }

  // })

  // ! chỉ chạy riêng componentDidMount -> tức là chỉ chạy ở tầng đầu tiên sau khi render
  //! useEffect (hàm xử lý code theo lifecycle, mảng) -> nếu mảng có giá trị, chỉ update khi state1 hay state nào đấy đổi
  useEffect( () => {
    console.log("DemoUseEffect: **** componentDidMount -> expected after rendering!!!");
  }, [] )

  // unmount = componentWillUnmount
  useEffect(() => {
    // tra ve obj
    timeout = setInterval( () => {
      console.log("call api interval");
    } , 1000);

    return () => {
      // thuc hien cac code khi roi khoi hoac xoa component khoi UI
      clearInterval(timeout);
    }
  }, []);


    // dropdown
  //! -> nếu mảng có giá trị, chỉ update khi state idTP thay đổi
  useEffect(() => {
    // ! sau khi UI render lai xong, chon setTP thi idTP da dc set xong
    console.log("didUpdate cua idTP: ", idTP);
    getArrQH();
  }, [idTP]); // chi chay khi idTP thay doi


  // render quận huyện
  let renderQH = () => {

    if(arrQH.length == 0) {
      // chua co quan huyen, nguoi dung chua chon thanh pho
      return <option>Hãy chọn thành phố trước</option>
    } else {
      return arrQH.map((qh) => {
        return <option key={qh.id} value={qh.id}>{qh.name}</option>
      });
    }
  }


  let getArrQH = () => {
    if (idTP !== "") {
      // co chon thanh pho
      // tim doi tuong thanh pho theo idTP
      let tp = arrLocation.find(objTP => objTP.id === idTP);
      let newArrQH = tp.danhSachQH;
      setQH(newArrQH);
    }
  }


  /**
   * 2 dropdown: danh sách thành phố, danh sách quận huyện theo thành phố
   * Khi chọn thành phố => tự động hiển thị danh sách quận huyện tương ứng
   * */ 

  console.log("DemoUseEffect: render idTP:", idTP);
  console.log("DemoUseEffect: arrQH:", arrQH);

  return (
    <div className='container'>
      <p className='alert alert-danger'>{like}</p>
      <p className='alert alert-danger'>{number}</p>
      <button onClick={ () => {
        setNumber(number + 1);
      } } className='btn btn-success'>Tăng number</button>

      <h2>Demo Thành Phố</h2>

      <div className='row w-50'>
        <div className="col-6">
          <select onChange={(event) => {
            // let value = event.target.value;
            let {value} = event.target;
            console.log("onChange: ", value);
            setTP(value);

            }} className="form-control" id="">
            <option value={""} >Chọn thành phố</option>
            <option value={"HCM"}>Hồ Chí Minh</option>
            <option value={"DN"}>Đà Nẵng</option>
          </select>
        </div>

        <div className="col-6">
          {/* Quận Huyện */}
            <select className="form-control" id="">
              {/* hàm giúp render quận huyện theo thành phố */}
              {renderQH()}
            </select>
        </div>

      </div>
      

      


    </div>
  )
}

// class component => thuộc tính sẽ khai báo trong class => thì sẽ không bị ảnh hưởng khi render lại UI
// -> khi render UI thì chỉ có phương thức render dc gọi lại
