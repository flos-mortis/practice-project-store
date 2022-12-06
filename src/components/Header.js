import React from "react"

function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img alt="" href="/#" width={187} height={71} src="img/logo.svg"></img>
                <div className="headerCity">
                    <img alt="" width={8.47} height={12} src="img/marker.svg"></img>
                    <p>Москва</p>
                    <img alt="" width={13} height={10} src="img/arrow.svg"></img>
                </div>
            </div>
            <div className="headerCatalogue">
                <button>
                    <img alt="" width={20} height={22} src="img/menu.svg"></img>
                    <p>Каталог</p>
                </button>
            </div>
            <div className="headerSearch">
                <input type="text" placeholder="Я ищу..."/>
                <button type="submit">
                    <img alt="" width={19} height={19} src="img/loopa.svg"></img>
                </button>
            </div>
            <ul className="headerRight">
                <li href="">
                    <img alt="" src="img/user.svg"></img>
                    <p>Войти</p>
                </li>
                <li href="">
                    <img alt="" src="img/orders.svg"></img>
                    <span>5</span>
                    <p>Заказы</p>
                </li>
                <li href="">
                    <img alt="" src="img/like.svg"></img>
                    <span>12</span>
                    <p>Избранные</p>
                </li>
                <li href="">
                    <img alt="" src="img/card.svg"></img>
                    <span>5</span>
                    <p>Корзина</p>
                </li>
            </ul>
    </header>
    )
}

export default Header;
