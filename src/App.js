import React from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
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
            <h1>Популярная компьютерная техника</h1>
            <div className="popular-items">
              <ProductCard/>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                  <span>Новинка</span>
                </div>
                  <img alt="" src="img/10.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver (53013ERK)</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/11.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Умная колонка Яндекс Станция Мини</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt="" src="img/12.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Робот-пылесос Xiaomi Mi Robot</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/13.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Зеркальный фотоаппарат Canon EOS 6D Body</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="bestseller">
            <h1>Хит продаж</h1>
            <div className="bestseller-items">
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
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                  <span>Новинка</span>
                </div>
                  <img alt="" src="img/10.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver (53013ERK)</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/11.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Умная колонка Яндекс Станция Мини</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt="" src="img/12.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Робот-пылесос Xiaomi Mi Robot</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/13.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Зеркальный фотоаппарат Canon EOS 6D Body</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="views-based">
            <h1>На основе просмотров</h1>
            <div className="views-based-items">
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
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                  <span>Новинка</span>
                </div>
                  <img alt="" src="img/10.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver (53013ERK)</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/11.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Умная колонка Яндекс Станция Мини</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt="" src="img/12.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Робот-пылесос Xiaomi Mi Robot</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/13.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Зеркальный фотоаппарат Canon EOS 6D Body</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="sponsored">
            <h1>Спонсорские товары</h1>
            <div className="sponsored-items">
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
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                  <span>Новинка</span>
                </div>
                  <img alt="" src="img/10.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Ультрабук Huawei MateBook D 14 NbD-WDI9 Mystic Silver (53013ERK)</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/11.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Умная колонка Яндекс Станция Мини</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt="" src="img/12.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Робот-пылесос Xiaomi Mi Robot</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
              <div className="product-card">
                <div className="product-card-markers">
                  <img alt="" width={18} height={15} src="img/favourite.svg"></img>
                </div>
                  <img alt=""  src="img/13.png"></img>
                  <h3>от 3000 ₽</h3>
                  <div className="product-card-name">
                    <p>Зеркальный фотоаппарат Canon EOS 6D Body</p>
                  </div>
                  <div className="product-card-bottom">
                    <span>26 предложений</span>
                    <button>Купить</button>
                  </div>
              </div>
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="brands">
            <h1>Представительные бренды</h1>
            <div className="brands-row">
              <img alt="" src="img/logo01.png"></img>
              <img alt="" src="img/logo02.png"></img>
              <img alt="" src="img/logo03.png"></img>
              <img alt="" src="img/logo04.png"></img>
              <img alt="" src="img/logo05.png"></img>
              <button>Все производители</button>
            </div>
          </div>
          <div className="shops">
            <h1>Территория магазинов</h1>
            <div className="shops-row">
              <img alt="" src="img/shop1.png"></img>
              <img alt="" src="img/shop2.png"></img>
              <img alt="" src="img/shop3.png"></img>
              <img alt="" src="img/shop4.png"></img>
              <img alt="" src="img/shop5.png"></img>
              <button>Все продавцы</button>
            </div>
          </div>
          <div className="browsed">
            <div className="browsed-top">
              <h1>Вы просматривали</h1>
              <div className="navigate-buttons">
                <button>
                  <img width={20} height={20} alt="" src="img/arrow-left.svg"></img>
                </button>
                <button>
                  <img width={20} height={20} alt="" src="img/arrow-right.svg"></img>
                </button>
              </div>
            </div>
            <div className="browsed-items">
                <div className="product-card">
                  <img alt="" src="img/9.png"></img>
                </div>
                <div className="product-card">
                  <img alt="" src="img/10.png"></img>
                </div>
                <div className="product-card">
                  <img alt=""  src="img/11.png"></img>
                </div>
                <div className="product-card">
                  <img alt="" src="img/12.png"></img>
                </div>
                <div className="product-card">
                  <img alt=""  src="img/13.png"></img>
                </div>
              </div>
          </div>
        </div>
      </div>
      <footer>
          <div className="footer-left">
            <div className="about">
              <h4>О компании</h4>
              <ul>
                <li>
                  <a href="">Контакты</a>
                </li>
                <li>
                  <a href="">Вакансии</a>
                </li>
                <li>
                  <a href="">Реквизиты</a>
                </li>
                <li>
                  <a href="">Партнерская <br/> программа</a>
                </li>
              </ul>
            </div>
            <div className="for-buyer">
              <h4>Покупателю</h4>
              <ul>
                <li>
                  <a href="">Помощь покупателю</a>
                </li>
                <li>
                  <a href="">Доставка</a>
                </li>
                <li>
                  <a href="">Оплата</a>
                </li>
                <li>
                  <a href="">Возврат</a>
                </li>
                <li>
                  <a href="">Кредит </a>
                </li>
                <li>
                  <a href="">Акции</a>
                </li>
                <li>
                  <a href="">Промокоды</a>
                </li>
                <li>
                  <a href="">СберСпасибо</a>
                </li>
              </ul>
            </div>
            <div className="for-shops">
              <h4>Магазинам</h4>
              <ul>
                <li>
                  <a href="">Помощь магазинам</a>
                </li>
                <li>
                  <a href="">Приглашение к <br/> сотрудничеству</a>
                </li>
                <li>
                  <a href="">Вход в личный кабинет</a>
                </li>
              </ul>
            </div>
            <div className="law-information">
              <h4>Правовая информация</h4>
              <ul>
                <li>
                  <a href="">Условия использования сайта</a>
                </li>
                <li>
                  <a href="">Политика обработки персональных данных</a>
                </li>
                <li>
                  <a href="">Условия заказа и доставки</a>
                </li>
                <li>
                  <a href="">Правила сервиса «закажи и забери»</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <img alt="" width={187} height={70} src="img/logo.svg"></img>
            <p>© 2022 «Texnostore»</p>
            <div className="social-network-group">
              <img alt="" src="img/instagram.svg"></img>
              <img alt="" src="img/viber.svg"></img>
              <img alt="" src="img/telegram.svg"></img>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
