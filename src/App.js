import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  const[cartItems, setCartItems] = React.useState([]);
  const[searchValue, setSearchValue] = React.useState('');

  const onAddToCart = (obj) => {
    if (!cartItems.find(e => e.title === obj.title)) {
      setCartItems(prev => [...prev, obj])
    }
  }

  return (
      <main>
        <div className="wrapper">
          <Header/>
          <Routes>
            <Route path="/" element={<Home onAddToCart={onAddToCart}/>}/>
            <Route path="/cart" element={<Cart items={cartItems}/>}/>
            <Route path="/login" element={
                <div className="overlay">
                    <LoginForm/>
                </div>}>
            </Route>
          </Routes>
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
      </main>
  );
}

export default App;
