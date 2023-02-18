import { combineReducers, createStore } from "redux";
import { facebookReducer } from "./reducers/facebookReducer";
import { tangGiamFSReducer } from "./reducers/tangGiamFSReducer";

const rootReducer = combineReducers({
    // chua cac reducer
    tangGiamFSReducer,
    facebookReducer

});

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );