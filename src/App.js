import React from "react";

function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <div className="categories">
          <div className="large-card">
            <img src="img/1.png" alt=""></img>
            <p>Электроника</p>
          </div>
          <div className="large-card">
            <img width={250} height={206} src="img/2.png" alt=""></img>
            <p>Бытовая техника</p>
          </div>
          <div className="large-card">
            <img width={250} height={206} src="img/3.png" alt=""></img>
            <p>Книги, хобби, канцелярия</p>
          </div>
          <div className="large-card">
            <img width={250} height={206} src="img/4.png" alt=""></img>
            <p>Продукты питания</p>
          </div>
          {/* <div className="small-card">
            <img width={119} height={106} src="img/5.png" alt=""></img>
            <p>Детские товары</p>
          </div>
          <div className="small-card">
            <img width={119} height={106} src="img/6.png" alt=""></img>
            <p>Одежда, обувь и аксессуары</p>
          </div>
          <div className="small-card">
            <img width={119} height={106} src="img/7.png" alt=""></img>
            <p>Зоотовары</p>
          </div>
          <div className="small-card">
            <img width={119} height={106} src="img/8.png" alt=""></img>
            <p>Красота и уход</p>
          </div> */}
        </div>
        <div className="popular">
          <h2>Популярная компьютерная техника</h2>
          <div className="popular-items">
            <div className="product-card">
              <div className="product-card-markers">
                <img alt="" width={18} height={15} src="img/favourite.svg"></img>
              </div>
                <img alt="" src="img/9.png"></img>
                <h5>от 3000 ₽</h5>
                <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver</p>
                <div className="product-card-bottom">
                  <span>26 предложений</span>
                  <button>Купить</button>
                </div>
            </div>
            <div className="product-card">
              <div className="product-card-markers">
                <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                <span>Новинка</span>
              </div>
                <img alt="" src="img/9.png"></img>
                <h5>от 3000 ₽</h5>
                <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver</p>
                <span>26 предложений</span>
                <button>Купить</button>
            </div>
            <div className="product-card">
              <div className="product-card-markers">
                <img alt="" width={18} height={15} src="img/favourite.svg"></img>
              </div>
                <img alt=""  src="img/9.png"></img>
                <h5>от 3000 ₽</h5>
                <p>Умная колонка Яндекс </p>
                <span>26 предложений</span>
                <button>Купить</button>
            </div>
            <div className="product-card">
              <div className="product-card-markers">
                <img alt="" width={18} height={15} src="img/favourite.svg"></img>
              </div>
                <img alt="" src="img/9.png"></img>
                <h5>от 3000 ₽</h5>
                <p>Умная колонка Яндекс </p>
                <span>26 предложений</span>
                <button>Купить</button>
            </div>
            <div className="product-card">
              <div className="product-card-markers">
                <img alt="" width={18} height={15} src="img/favourite.svg"></img>
              </div>
                <img alt=""  src="img/9.png"></img>
                <h5>от 3000 ₽</h5>
                <p>Умная колонка Яндекс </p>
                <span>26 предложений</span>
                <button>Купить</button>
            </div>
          </div>
          <button className="show-more-btn">Показать еще</button>
        </div> 
      </div>
    </div>
  );
}

export default App;
