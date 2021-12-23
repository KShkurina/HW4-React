import React from "react";
import Card from "../../Components/Card/Card";
import styles from './ShopPage.scss'
import {useSelector,useDispatch} from "react-redux";
import {goodsLoad,setFavoriteLS, cartAdd, closeModal, openModal} from "../../store/actions/actions";
import {useEffect} from "react";
import {modalReducer} from "../../store/reducers/modal.Reducer";
import Modal from "../../Components/Modal/Modal";
// import Modal from "../../Components/Modal/Modal";


const ShopPage = () => {

    const  dispatch = useDispatch()

    useEffect(()=>{
        dispatch(goodsLoad())
    },[])

    const card = useSelector(state => {
        return state.goodsReducer.goods
    })

    const addToCart = (id) => {
        dispatch(cartAdd(id))
        closeModalFn()
    }

    const openModalFn = (id, name, price) => {
        dispatch(openModal({id, name, price}))
    }

    const closeModalFn = () => {
        dispatch(closeModal())
    }


    const setFavorite = (id)=>{
        dispatch(setFavoriteLS(id))
    }


    const modalData = useSelector(state=> {
        return state.modalReducer
    })

    const book = card.map((info, key) => <Card key={key} isModalRequired={true} openModalFn={openModalFn} setFavorite={setFavorite} data={info} buttonName={'В корзину'}/>)
    const modalComponent = modalData.isOpened ? <Modal closeModal={closeModalFn} modalData={modalData} modalConfirm={addToCart} /> : null;

    return (
        <div className='shopContainer'>
            {book}
            {modalComponent}
        </div>
    )
}
export default ShopPage