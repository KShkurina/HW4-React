import {
    LOAD_GOODS,
    SET_FAVORITES,
    OPEN_MODAL,
    CLOSE_MODAL,
    CART_ADD,
    CART_INCREASE,
    CART_DECREASE,
    CART_DELETE
} from "../types/types";


export const goodsLoad = () => {
    return async dispatch => {
        const resp = await fetch('/data.json')
        const respJson = await resp.json()
        dispatch({
            type: LOAD_GOODS,
            payload: respJson
        })
    }

}

export const setFavoriteLS = (id) => {
    return {
        type: SET_FAVORITES,
        id:id
    }
}
export const openModal = ({id, name, price}) => {
    return {
        type: OPEN_MODAL,
        payload: {
            id,
            name,
            price
        }

    }
}
export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
export const cartAdd = (id) => {
    return {
        type: CART_ADD,
        id: id
    }
}

export const cartIncrease = (id) => {
    return {
        type: CART_INCREASE,
        id: id
    }
}
export const cartDecrease = (id) => {
    return {
        type: CART_DECREASE,
        id: id
    }
}
export const cartItemDelete = (id) => {
    return {
        type: CART_DELETE,
        id: id
    }
}