import React, {useEffect} from "react";
// import Card from "../../Components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {cartIncrease, cartItemDelete, goodsLoad, cartDecrease} from "../../store/actions/actions";
import ItemCart from "../../Components/Card/ItemCart";
import styles from './CartPage.scss'

const CartPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(goodsLoad())
    }, [])

    const CardsInCart = useSelector(state => {
        return state.goodsReducer.goods.filter(good => good.cartCount > 0)
    })
    console.log(CardsInCart)
    const increaseCount = (id)=>{
        dispatch(cartIncrease(id))

    }
    const decreaseCount = (id)=>{
        dispatch(cartDecrease(id))

    }
    const itemDelete = (id)=>{
        dispatch(cartItemDelete(id))

    }
    const cartBooks = CardsInCart.map((book, key) => <ItemCart info={book} itemDelete={itemDelete} decreaseCount={decreaseCount} increaseCount={increaseCount} />)

    const TotalPrice = ()=>{
        let summ = 0
       for (let i=0;i<CardsInCart.length;i++) {
           summ += CardsInCart[i].cartCount*CardsInCart[i].price
        }
       return <div className='sum' > Как оказалось, не так уж и много за вязнку книг ;) всего {summ} Чай с баранками в подарок !</div>
    }

    return (<>
        {cartBooks}
        {TotalPrice()}
    </>)
}
export default CartPage