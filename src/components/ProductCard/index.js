import React, { Fragment } from "react";
import styles from "./ProductCard.module.scss"
import Modal from "../Modal";

function ProductCard({newItem, imageUrl, price, title, suggestions, onBuy}) {
    const [isAdded, setIsAdded] = React.useState();
    const [modalOpened, setModalOpened] = React.useState(false);

    const handleAddClick = () => {
        setIsAdded(!isAdded)
    }

    const onClickBuy = () => {
        setModalOpened(true);
        onBuy({title, price, imageUrl});    
    }

    return (
        <Fragment>
            <div className={styles.product_card}>
                <div className={styles.product_card_markers}>
                    <img alt="" onClick={handleAddClick} width={18} height={15} src={isAdded ? "img/faved.svg" : "img/unfaved.svg"}></img>
                    {newItem}
                </div>
                <img alt="" src={imageUrl}></img>
                <h3>от {price} ₽</h3>
                <div className={styles.product_card_name}>
                    <p>{title}</p>
                </div>
                <div className={styles.product_card_bottom}>
                    <span>{suggestions} предложений</span>
                    <button onClick={onClickBuy}  className="greenBtn">Купить</button>
                </div>
            </div>
            
            { modalOpened && 
                <div className="overlay">    
                    <Modal 
                        onClickClose={() => setModalOpened(false)}
                        imageUrl={imageUrl}
                        title={title}
                        price={price}
                    />
                </div>
            }
        </Fragment>
    )
}

export default ProductCard;
