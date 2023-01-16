import React from "react";
import styles from "./ProductCard.module.scss"


function ProductCard(props) {

    const [isAdded, setIsAdded] = React.useState();

    const handleAddClick = () => {
        setIsAdded(!isAdded)
    }

    return (
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
            <button>Купить</button>
        </div>
    </div>
    )
}

export default ProductCard;
