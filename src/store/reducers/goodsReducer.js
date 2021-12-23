import {
    CART_ADD,
    LOAD_GOODS,
    SET_FAVORITES,
    CART_INCREASE,
    CART_DECREASE,
    CART_DELETE
} from "../types/types";

const initialState = {
    goods: []
}

export const goodsReducer = (state = initialState, action) => {
    console.log(action);
    console.log('state', state);

    const LSCart = localStorage.getItem('cart')
    const LSCartArray = (LSCart !== null) ? JSON.parse(LSCart).books : [{id: 0, count: 0}];

    const LSStart = localStorage.getItem('favorites')
    const LSIdsArray = (LSStart !== null) ? JSON.parse(LSStart).id : [0];

    switch (action.type) {

        case LOAD_GOODS:
            const allGoods = action.payload.map(good => {

                const isFavoriteGoodsBool = LSIdsArray.includes(good.id) ? true : good.isFavorite; // includes возвращает true или false
                const bookObj = LSCartArray.find(obj => obj.id === good.id)
                const booksCount = bookObj ? bookObj.count : 0
                // good.id === LSCartObj.id
                return {
                    id: good.id,
                    isFavorite: isFavoriteGoodsBool,
                    name: good.name,
                    price: good.price,
                    art: good.art,
                    color: good.color,
                    url: good.url,
                    cartCount: booksCount
                }
            })

            // const default_favorites = allGoods.filter(good => good.isFavorite === true);
            // let favIds = []
            // default_favorites.forEach(element => {
            //     favIds.push(element.id)
            // })
            // console.log(favIds);


            return {
                ...state, goods: allGoods
            }

        case SET_FAVORITES:
            const goods = state.goods.map(good => (good.id === action.id ? {
                ...good,
                isFavorite: !good.isFavorite
            } : good));

            console.log(goods);

            const LS = localStorage.getItem('favorites')

            if (LS !== null) {
                const LSjson = JSON.parse(LS).id
                const index = LSjson.indexOf(action.id)

                if (index > -1)
                    LSjson.splice(index, 1)
                else
                    LSjson.push(action.id)

                localStorage.setItem('favorites', JSON.stringify({id: LSjson}));
            } else
                localStorage.setItem('favorites', JSON.stringify({id: [action.id]}))

            return {
                ...state, goods: goods
            }

        case CART_ADD:
            // const LSCart = localStorage.getItem('cart')


            if (LSCart) {

                // {books: [{id: 1, count: 2}, {id: 1, count: 2}]}
                const LSCartJson = JSON.parse(LSCart).books
                // [{id: 1, count: 2}, {id: 1, count: 2}]
                const LSCartIndex = LSCartJson.findIndex(item => item.id === action.id)

                if (LSCartIndex >= 0)
                    LSCartJson[LSCartIndex].count++
                else
                    LSCartJson.push({id: action.id, count: 1})

                localStorage.setItem('cart', JSON.stringify({books: LSCartJson}))

            } else localStorage.setItem('cart', JSON.stringify({books: [{id: action.id, count: 1}]}))

            return state


        case CART_INCREASE:
            const products = state.goods.map(item => {
                if (item.id !== action.id) {
                    return item
                }
                const LSCartJson = JSON.parse(LSCart).books
                const LSCartIndex = LSCartJson.findIndex(item => item.id === action.id)
                LSCartJson[LSCartIndex].count++


                localStorage.setItem('cart', JSON.stringify({books: LSCartJson}))
                return {
                    ...item, cartCount: item.cartCount + 1
                }
            })

            return {...state, goods: products}


        case CART_DECREASE:
            const product = state.goods.map(item => {
                if (item.id !== action.id) {
                    return item
                }
                const LSCartJson = JSON.parse(LSCart).books
                const LSCartIndex = LSCartJson.findIndex(item => item.id === action.id)
                LSCartJson[LSCartIndex].count--


                localStorage.setItem('cart', JSON.stringify({books: LSCartJson}))
                return {
                    ...item, cartCount: item.cartCount - 1
                }
            })

            return {...state, goods: product}

        case CART_DELETE:
            const book = state.goods.map(item => {
                if (item.id !== action.id) {
                    return item
                }
                const LSCartJson = JSON.parse(LSCart).books
                const LSCartIndex = LSCartJson.filter(item => item.id !== action.id)
                localStorage.setItem('cart', JSON.stringify({books: LSCartIndex}))
                return {
                    ...item, cartCount: 0
                }
            })

            return {...state, goods: book}

        default:
            return state;
    }
}

