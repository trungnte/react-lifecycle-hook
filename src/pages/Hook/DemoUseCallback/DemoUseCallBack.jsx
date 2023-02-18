import React, { useCallback, useState } from 'react'
import Comment from './Comment';

export default function DemoUseCallBack() {

  let [like, setLike] = useState(0);
  let [number, setNumber] = useState(0);

  // hàm (tham chiếu: object, array, hàm)
  // các biến và hàm sẽ bị tạo lại => địa chỉ mới
  // ! memo tưởng là thay đổi sẽ render lại UI
  let notifyMsg = () => {
    console.log(`bạn đã tăng number: ${number}`);
  }
  //! lưu cache, lưu lại địa cũ của hàm
  let notifyMsgCallBack = useCallback(notifyMsg, [number]);


  return (
    <div className='container'>
    <button className='btn btn-danger' onClick={() => {
      setLike(like + 1);
    }}>Tăng like</button>
  
  <button className='btn btn-danger' onClick={() => {
      setNumber(number + 1);
    }}>Tăng number</button>
  
      <div>
        <h2 className='py-5'>Demo Use Call Back</h2>

        <div className="card w-25" >
          <img style={{width: "100%"}} src="https://i.pravatar.cc/?u=77" className="card-img-top" alt="" />
          <div className="card-body">
            <p className="card-text">Like: {like}</p>
            
          </div>
        </div>
      </div>

      {/* => props truyền xuống sẽ đổi địa chỉ => memo render lại UI
      do nhầm giá trị thay đổi */}
      {/*  number={number} */}
      <Comment notifyMsg={notifyMsgCallBack}/>


    </div>
  )
}
