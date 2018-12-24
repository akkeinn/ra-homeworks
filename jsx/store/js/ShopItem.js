/******************************
 * Ваша реализация компонента
 *****************************/
function ShopItem({brand,title,description,descriptionFull, price, currency})
{
 return  out = (<div> 
<div className="main-content">
  <h2>{item.brand}</h2>
  <h1>{item.title}</h1>
  <h3>{item.description}</h3>
  <div className="description">
    {item.descriptionFull}
  </div>
   <div className="highlight-window  mobile"><div className="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div className="purchase-info">
     <div className="price">{item.currency}{item.price}</div>
  <div></div>
    <button>Добавить в корзину</button>
  </div>
</div>  </div>);
}

/******************************
 * Не вносить изменния ниже
 ******************************/
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
};

ReactDOM.render(<ShopItem item={item} />, document.getElementById('root'));
