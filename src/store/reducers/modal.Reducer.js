import {OPEN_MODAL,CLOSE_MODAL} from "../types/types";

const initialState = {
    isOpened: false,
    id: 0,
    name: '',
    price:0
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                isOpened: true
            }

        case CLOSE_MODAL:
            return {
                ...state, isOpened: false
            }

        default:
            return state;
    }
}

