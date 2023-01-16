import styles from "./Modal.module.scss"

function Modal() {
    return (
        <div className={styles.cardModal}>
            <img className={styles.closeModal} alt="" src="img/close.svg"></img>
            <h1>Товар добавлен в корзину</h1>
            <div className={styles.productCard}>
                <img alt="" src="img/product.png"></img>
                <div className={styles.productDesc}>
                    <div className={styles.productDescText}>
                        <p>Смартфон Xiaomi Mi 10T Pro 8GB/256GB (бирюзовый)</p>
                        <h4>3000 ₽</h4>
                        <p><span>В корзине 5 товаров</span> на сумму 6 971 ₽</p>
                    </div>
                    <div className={styles.productBtns}>
                        <div className={styles.productCounter}>
                            <img className={styles.down} src="img/down.svg"></img>
                                <p className={styles.productCounterValue}>1</p>
                            <img className={styles.up} src="img/up.svg"></img>
                        </div>
                        <div className={styles.goToCardBtn}>
                            <button>Перейти в корзину</button>
                        </div>
                        <div className={styles.goToShopBtn}>
                            <a>Продолжить покупки</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;