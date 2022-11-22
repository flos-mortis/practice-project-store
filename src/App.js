import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img alt="" width={187} height={71} src="img/logo.svg"></img>
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
          <li>
            <img alt="" src="img/user.svg"></img>
            <span>Войти</span>
          </li>
          <li>
            <img alt="" src="img/orders.svg"></img>
            <span>Заказы</span>
          </li>
          <li>
            <img alt="" src="img/like.svg"></img>
            <span>Избранное</span>
          </li>
          <li>
            <img alt="" src="img/card.svg"></img>
            <span>Корзина</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="categories">
          <div className="card">
            <img width={250} height={206} src="img/1.png" alt=""></img>
            <p>Электроника</p>
          </div>
          <div className="card">
            <img width={250} height={206} src="img/2.png" alt=""></img>
            <p>Бытовая техника</p>
          </div>
          <div className="card">
            <img width={250} height={206} src="img/3.png" alt=""></img>
            <p>Книги, хобби, канцелярия</p>
          </div>
          <div className="card">
            <img width={250} height={206} src="img/4.png" alt=""></img>
            <p>Продукты питания</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
