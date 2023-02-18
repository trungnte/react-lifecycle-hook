import React, { Component } from 'react'

export default class  extends Component {

  //! chỉ có các phương thức của lifecycle mới dc gọi lại
  // không bị tạo lại
  first = () => {
    console.log("Phuong thuc class!")
  }
  render() {
    return (
      <div>
    </div>
    )
  }
}
