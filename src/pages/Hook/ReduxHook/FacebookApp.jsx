import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../../redux/action/facebookApp/facebookAction';
import { ADD_COMMENT } from '../../../ulti/setting';

export default function FacebookApp() {

  let {arrComment} = useSelector(state => state.facebookReducer);

  let [userComment, setUserComment] = useState({
      username: "", 
      comment:"", 
      avatar: "https://i.pravatar.cc/?u=73"
    })

  let dispatch = useDispatch();

  let renderComment = () => {
    return arrComment.map((cmt) => {
      return <div key={cmt.username} className='row py-3'>
                <div className="col-2">
                  <img className='img-fluid' src={cmt.avatar} alt="" />
                </div>

                <div className="col-10">
                  <p>{cmt.username}</p>
                  <p>{cmt.comment}</p>
                </div>
            </div>
    });
  }


  let handleChange = (event) => {
    let {value, id} = event.target;
    setUserComment({
      ...userComment,
      [id]: value
    });
  }

  let handleSumit = (event) => {
    event.preventDefault();
    let action = addCommentAction(userComment);

    dispatch(action);
  }

  // console.log(arrComment);
  // console.log(userComment);
  return (
    <div className='container'>
      <h2>Facebook App</h2>
      <div className='bg-secondary'>
        {renderComment()}

      </div>

      <div>

        <form onSubmit={handleSumit}>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input onChange={handleChange} type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <input onChange={handleChange} type="text" className="form-control" id="comment" />
          </div>
          
          <button type="submit" className="btn btn-primary">Send</button>
        </form>

      </div>
      
    </div>
  )
}
