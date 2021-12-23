import {combineReducers} from "redux";
import {goodsReducer} from "./reducers/goodsReducer";
import {modalReducer} from "./reducers/modal.Reducer";



export const rootReducer =combineReducers({
    goodsReducer,
    modalReducer

})

