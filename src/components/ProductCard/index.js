import React, { Fragment } from "react";
import styles from "./ProductCard.module.scss"
import Modal from "../Modal";


function ProductCard(props) {

    const [isAdded, setIsAdded] = React.useState();
    const [modalOpened, setModalOpened] = React.useState(false)

    const handleAddClick = () => {
        setIsAdded(!isAdded)
    }

    const handleOpenClick = () => {
        setModalOpened(true)
    }

    return (
        <Fragment>
            <div className={styles.product_card}>
                <div className={styles.product_card_markers}>
                    <img alt="" onClick={handleAddClick} width={18} height={15} src={isAdded ? "img/faved.svg" : "img/unfaved.svg"}></img>
                    {props.newItem}
                </div>
                <img alt="" src={props.imageUrl}></img>
                <h3>от {props.price} ₽</h3>
                <div className={styles.product_card_name}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.product_card_bottom}>
                    <span>{props.suggestions} предложений</span>
                    <button onClick={handleOpenClick}>Купить</button>
                </div>
            </div>
            
            { modalOpened ? 
                <div className="overlay">    
                    <Modal 
                        onClickClose={() => setModalOpened(false)}
                        imageUrl={props.imageUrl}
                        title={props.title}
                        price={props.price}
                    />
                </div> 
            : null
            }
        </Fragment>
    )
}

export default ProductCard;
