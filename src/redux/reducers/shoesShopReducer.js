import { GET_SHOES_LIST } from "../types/shoesShopType"

const initialState = {
  arrShoes: [],
  user: {},
}

export const shoesShopReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_SHOES_LIST:
    state.arrShoes = action.mangShoes;
    return {...state}

  default:
    return state
  }
}
