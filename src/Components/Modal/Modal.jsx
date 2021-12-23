import React from 'react';
import styles from './Modal.module.scss';



const Modal = (props)=> {
  
        
      
        const {closeModal,modalConfirm, modalData}= props

        return( 
        <div className={styles.wrapperRed} onClick={closeModal} >
                <div className={styles.modal} onClick={e=>{
                 e.preventDefault();
                 e.stopPropagation();
                 }
                 }>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        "{modalData.name}"
                     - Отличный Выбор!</h1>
                    <button className={styles.buttonEsc} onClick={closeModal}>{String.fromCharCode(215)}</button>
                </div>
                <div className={styles.content}> Сегодня ее цена всего {modalData.price} грн.  Положить в корзину? </div>
                <div className={styles.buttons}>
                    <button className={styles.buttonCancel} onClick={()=>{modalConfirm(modalData.id)} }>Ok</button>
                    <button className={styles.buttonCancel} onClick={closeModal}>Отмена</button>
                    </div>
                </div>
            </div>)
        
    }

    export default Modal;