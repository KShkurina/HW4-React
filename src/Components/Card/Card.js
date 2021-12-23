import styles from './Card.scss'
import React from "react";

const Card = (props) => {
    const {data, setFavorite,buttonName, openModalFn, isModalRequired, addToCart} = props
    const {name, id, price, art, color, url, isFavorite} = data

    const clickHandle = (id, name, price)=>{
        if (isModalRequired){
            openModalFn( id, name, price)
        }
        else addToCart(id)
    }

    const styles = {
        color: isFavorite ? 'red' : 'black',
        fontSize: '14px'
    }

    return <div className='card'>
        <img className='img' height='80px' width='80px' src={url} alt='картинка книги'/>
        <p>{name}</p>
        <p>Цена:{price} </p>
        <button className='btnToFavorite' style={styles} onClick={() => {setFavorite(id)}}>
            ❤
        </button>
        <button className='btnToCard' onClick={() => {clickHandle( id, name, price)}}>
            {buttonName}
        </button>
    </div>


}

export default Card