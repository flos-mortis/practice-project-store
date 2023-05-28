import React from "react";
import styles from "./Cart.module.scss"

function Cart({items=[]}) {
    return (
        <div className={styles.cart}>
            <h1>Оформление товара</h1>
            <div className={styles.cartContent}>
                <div className={styles.leftSide}>
                    <div className={styles.loginOrSignIn}>
                        <h2>Войдите или зарегистрируйтесь</h2>
                        <button className="whiteBtn">Войти</button>
                    </div>
                    <div className={styles.order}>
                        <h2>Заказ №1</h2>
                        {
                            items.map((obj) => (
                                <div className={styles.orderProductCard}>
                                    <img src={obj.imageUrl} width={"20%"} height={"20%"}/>
                                    <p>{obj.title}</p>
                                    <div className={styles.counter}>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                    <h4>{obj.price}</h4>
                                    <button className={styles.deleteItem}>
                                        <img src="img/deleteItem.png"></img>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.rightSideTotal}>
                    <h2>Ваш заказ</h2>
                    <div className={styles.cartItemsCount}>
                        <p>Товары (5)</p>
                        <h4>3000 ₽</h4>
                    </div>
                    <div className={styles.cartTotalPrice}>
                        <h4>Итого:</h4>
                        <h4>3000 ₽</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;