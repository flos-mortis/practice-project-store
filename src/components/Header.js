import React from "react" 
import {
    Link} from "react-router-dom" 
    

function Header() {
    const[searchValue, setSearchValue] = React.useState('');
  
    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <header>
            <div className="headerLeft">
                <Link to="/">
                    <img alt="" href="/#" width={187} height={71} src="img/logo.svg"></img>
                </Link>
                <div className="headerCity">
                    <img alt="" width={8.47} height={12} src="img/marker.svg"></img>
                    <p>Москва</p>
                    <img alt="" width={13} height={10} src="img/arrow.svg"></img>
                </div>
            </div>
            <div className="headerCatalogue">
                <button className="greenBtn">
                    <img alt="" width={20} height={22} src="img/menu.svg"></img>
                    <p>Каталог</p>
                </button>
            </div>
            <div className="headerSearch">
                <input onChange={onChangeSearch} value={searchValue} type="text" placeholder="Я ищу..."/>
                <button type="submit" className="greenBtn">
                    <img alt="" width={19} height={19} src="img/loopa.svg"></img>
                </button>
            </div>
            <ul className="headerRight">
                <li href="">
                    <Link to="/login">
                        <img alt="" src="img/user.svg"></img>
                        <p>Войти</p>
                    </Link>
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
                    <Link to="/cart">
                        <img alt="" src="img/card.svg"></img>
                        <span>5</span>
                        <p>Корзина</p>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
