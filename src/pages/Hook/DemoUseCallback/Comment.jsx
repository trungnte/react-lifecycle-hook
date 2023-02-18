import React, { memo } from 'react'

// memo

function Comment(prop) {

  console.log("Comment: render...");
  prop.notifyMsg();

  return (
    <div>
      <p>Ahihi</p>
      <p>{prop.number}</p>
      <div>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      </div>
      
      <button className='btn btn-danger'>Send</button>
    </div>
  )
}


// ! kiểm tra props của con có đổi ko? 
// Nếu props thay đổi => render lại UI
// Nếu không thì không thay đổi UI => giống pure component
export default memo(Comment); // shalow compare (tham tri: number, string, boolean)