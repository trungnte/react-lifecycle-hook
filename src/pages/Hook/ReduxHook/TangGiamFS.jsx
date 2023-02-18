import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TangGiamFS() {


  // gia tri can doi => font size


  // lấy state từ reducer xuống component mapStateToProps
  // state giong rootReducer
  // let fs = useSelector((state) => {
  //   return state.tangGiamFSReducer
  // });

  let fs = useSelector(state => state.tangGiamFSReducer);

  let dispatch = useDispatch();

  return (
    <div className='container'>
      <p style={{fontSize: `${fs}px`}} className='alert alert-danger'>
        TangGiamFS
      </p>
      <button onClick={() => {
        let action = {
          type: "TANG_GIAM",
          fs: 2
        }
        dispatch(action);

      }} className='btn btn-success mr-2'>Tăng</button>
      <button onClick={() => {
        let action = {
          type: "TANG_GIAM",
          fs: -2
        }
        dispatch(action);
        
      }} className='btn btn-danger'>Giảm</button>
    </div>
  )
}
