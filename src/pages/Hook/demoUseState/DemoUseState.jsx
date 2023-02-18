import React, { useState } from 'react'


export default function DemoUseState() {

  //! FIXME: trả về 1 mảng [state, setState] (giá trị cần đổi, hàm giúp đổi giá trị của state)
  //! let [state, setState] = useState(giá trị ban đầu của state);
  let [fontSize, setFontSize] = useState(16);
  let [userInfo, setUserInfo] = useState({
    name: "Nguyen Van A",
    avatar: "https://i.pravatar.cc/",
    vote: 0
  });

  // return : trả về UI của function component
  return (
    <div className='container'>
      <div>
        <h2>Demo tăng giảm font size</h2>
        <p style={{fontSize: `${fontSize}px`}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea corporis expedita repudiandae fuga tempora, maxime, autem ratione, omnis ipsum quos ipsam repellendus dicta aperiam voluptas nostrum? Soluta, magnam velit.</p>
      
        <button onClick={() => {
          setFontSize(fontSize + 1);
        }} className='btn btn-success mr-2'>+</button>
        <button onClick={() => {
          setFontSize(fontSize - 1);
        }} className='btn btn-danger'>-</button>

        <h2 className='py-5'>Demo Vote</h2>

        <div className="card w-25" >
          <img style={{width: "100%"}} src={userInfo.avatar} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{userInfo.name}</h5>
            <p className="card-text">{userInfo.vote}</p>
            <button onClick={() => {
              // setUserInfo({
              //   name: "Nguyen Van A",
              //   avatar: "https://i.pravatar.cc/?u=77",
              //   vote: userInfo.vote + 1
              // });

              setUserInfo({
                ...userInfo, vote: userInfo.vote + 1
              });
            }} className='btn btn-danger'>Vote</button>
          </div>
        </div>


      </div>
    </div>
  )
}

/**
 * tăng giảm font size
 * B1: Tạo UI
 * B2: Xác định state (fontSize, number)
 * B3: Xác định nơi gọi setState (click button + hoặc -)
 * */ 