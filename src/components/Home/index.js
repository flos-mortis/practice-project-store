import React from "react"
import ProductCard from "../ProductCard"

function Home({onAddToCart}) {
    const[items, setItems] = React.useState([]);
  
    React.useEffect(() => {
        fetch('https://63de507f9fa0d60060fc8e5d.mockapi.io/items')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setItems(json);
        });
    }, []);

    return (
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
                {
                  items.map((item) => (
                      <ProductCard 
                          key={item.title}
                          newItem={item.newItem} 
                          imageUrl={item.imageUrl}
                          price={item.price}
                          title={item.title}
                          suggestions={item.suggestions}
                          onBuy={(obj) => onAddToCart(obj)}
                      />
                  ))
                }
              </div>
              <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="bestseller">
            <h1>Хит продаж</h1>
            <div className="bestseller-items">
              {
                  items.map((item) => (
                      <ProductCard 
                          key={item.title}
                          newItem={item.newItem} 
                          imageUrl={item.imageUrl}
                          price={item.price}
                          title={item.title}
                          suggestions={item.suggestions} 
                          onBuy={(obj) => onAddToCart(obj)}
                      />
                  ))
                }
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div>
          <div className="views-based">
            <h1>На основе просмотров</h1>
            <div className="views-based-items">
                {
                  items.map((item) => (
                      <ProductCard 
                          key={item.title}
                          newItem={item.newItem} 
                          imageUrl={item.imageUrl}
                          price={item.price}
                          title={item.title}
                          suggestions={item.suggestions} 
                          onBuy={(obj) => onAddToCart(obj)}
                      />
                  ))
                }
            </div>
            <button className="show-more-btn">Показать еще</button>
          </div> 
          <div className="sponsored">
            <h1>Спонсорские товары</h1>
            <div className="sponsored-items">
                {   
                  items.map((item) => (
                    <ProductCard 
                        key={item.title}
                        newItem={item.newItem} 
                        imageUrl={item.imageUrl}
                        price={item.price}
                        title={item.title}
                        suggestions={item.suggestions} 
                        onBuy={(obj) => onAddToCart(obj)}
                    />
                  ))
                }
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
    )
}

export default Home