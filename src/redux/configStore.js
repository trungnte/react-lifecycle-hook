import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { facebookReducer } from "./reducers/facebookReducer";
import { shoesShopReducer } from "./reducers/shoesShopReducer";
import { tangGiamFSReducer } from "./reducers/tangGiamFSReducer";

const rootReducer = combineReducers({
    // chua cac reducer
    tangGiamFSReducer,
    facebookReducer,
    shoesShopReducer

});

export const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    );