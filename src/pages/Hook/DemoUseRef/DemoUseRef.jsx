import React, { useRef, useState } from 'react'

export default function DemoUseRef() {

  //! khi dung useState thi se render lai UI khi setState
  // let [userLogin, setUserLogin] = useState({
  //   username:"",
  //   password:""
  // });

   // khi setState chi can luu ngam gia tri khong can render lai UI
  let useRefLogin = useRef({
    username:"",
    password:""
  });


  let inputRef = useRef(null);

  let handleChange = (event) => {
    let {value, id} = event.target;

    // useRefLogin.current.username = value;
    useRefLogin.current[id] = value;

    // setUserLogin({
    //   ...userLogin,
    //   [id]: value
    // });

    console.log("handleChange: ", useRefLogin.current);

  }

  let handleSumit = (event) => {
    event.PreventDefault();
    // khi submit moi thong bao ket qua cua state
    console.log("handleSumit: ", useRefLogin.current);
    inputRef.current.style.color = "red";
  }

  console.log("Ref: render form!");
  // console.log(useRefLogin);

  return (
    <div className='container' onSubmit={handleSumit}>
      <form className='w-50'>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input ref={inputRef} type="text" className="form-control" id="username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref={inputRef} type="password" className="form-control" id="password" onChange={handleChange} />
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
