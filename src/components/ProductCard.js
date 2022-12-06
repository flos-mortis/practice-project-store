import React from "react"

function ProductCard() {
    return (
    <div className="product-card">
        <div className="product-card-markers">
            <img alt="" width={18} height={15} src="img/favourite.svg"></img>
        </div>
        <img alt="" src="img/9.png"></img>
        <h3>от 3000 ₽</h3>
        <div className="product-card-name">
            <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver</p>
        </div>
        <div className="product-card-bottom">
            <span>26 предложений</span>
            <button>Купить</button>
        </div>
    </div>
    )
}

export default ProductCard;
