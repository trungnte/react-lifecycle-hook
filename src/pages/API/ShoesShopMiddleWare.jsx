
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { GET_SHOES_LIST } from '../../redux/types/shoesShopType';
import { getShoesListAction } from '../../redux/action/shoesShopAction/shoesShopAction';

export default function ShoesShopMiddleWare() {

  let {arrShoes} = useSelector(state => state.shoesShopReducer);
  // console.log(arrShoes);

  let dispatch = useDispatch();

  useEffect(() => {
    getShoesList();
  }, [])


  const getShoesList = () => {
    /**
     * action:
     *  - action loai 1: doi tuong
     *  - action loai 2: ham function
     * 
    */

    //TODO gan ham action cua shoesShopAction
    // action creator
    //! khi action loại 2 có xử lý call api và dispatch data lên reducer
    //! => phải dùng middleware để đẩy dữ liệu từ api lên store
    let action = getShoesListAction;

    //! dispatch1 se goi ham action o tren
    dispatch(action);

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
      <h2>ShoesShopMiddleWare</h2>
      {/* <button className='btn btn-danger' onClick={getShoesList}>Call API</button> */}
      <div className="row">
        {renderUI()}
      </div>
    </div>
  )
}
