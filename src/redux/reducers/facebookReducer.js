import { ADD_COMMENT } from "../../ulti/setting";

const initialState = {
  arrComment: [
    {username: "user123", comment:"ahihi", avatar: "https://i.pravatar.cc/?u=73"},
    {username: "user456", comment:"huhuhu", avatar: "https://i.pravatar.cc/?u=74"},
  ]
}

export const facebookReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_COMMENT:
      // console.log(action.userComment);
      // copy phan tu cua mang cu, them phan tu moi
      state.arrComment = [...state.arrComment, action.userComment];
      return {...state}

  default:
    return state
  }
}
