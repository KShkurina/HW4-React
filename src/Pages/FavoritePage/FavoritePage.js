import React, {useState} from "react";
import Card from "../../Components/Card/Card";
import {useSelector,useDispatch} from "react-redux";
import {cartAdd, goodsLoad, setFavoriteLS} from "../../store/actions/actions";
import {useEffect} from "react";
import styles from './FavoritePage.scss'


const FavoritePage = () => {

    const  dispatch = useDispatch()

    useEffect(()=>{
        dispatch(goodsLoad())
    },[])

    const favoriteCard = useSelector(state => {
        return state.goodsReducer.goods.filter(good=>good.isFavorite===true)
    })

    const  addToCart = (id) => {
        dispatch(cartAdd(id))
    }

    const setFavorite = (id)=>{
        dispatch(setFavoriteLS(id))
    }
    const favoritesBooks = favoriteCard.map((book,key)=><Card addToCart={addToCart} isModalRequired={false} data={book} key={key} setFavorite={setFavorite} buttonName={'В корзину'}/>)

    return (
        <div className='favoritePage'>
            {favoritesBooks}
        </div>
    )
}
export default FavoritePage