import React from "react";
import styles from './ItemCart.scss'

const ItemCart = (props) => {
    const { info, increaseCount,decreaseCount,itemDelete } = props

    return <div className='itemCart'>
        <div className='imgWrapper'>
        <img height='40px' width='40px' src={info.url} alt='картинка книги'/>
        <p>{info.name}</p>
        <p>Цена:{info.price}</p>
        <div className='itemCount'>Количество: {info.cartCount} </div><br/>
        </div>
        <button className='btnIncr' onClick={()=>{increaseCount(info.id)}}>+</button>
        <button className='btnIncr' onClick={()=>{decreaseCount(info.id)}}>-</button>
        <div className='itemSum'>Сумма : {info.price*info.cartCount}</div>
        <button className='btnDelete'
            onClick={() =>
        {itemDelete(info.id)}}
        >Удалить из корзины</button>
        {/* <button onClick={removeBook}>Remove</button> */}
    </div>


}

export default ItemCart