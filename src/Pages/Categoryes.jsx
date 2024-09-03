import React, { useContext } from 'react'
import './CSS/Categoryes.css'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items';

const Categoryes = (props) => {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='categoryes'>
      <div className="indexsort">
        <p>
          <span>Showing 1-8</span> out of 16 products
        </p>
      </div>
      <div className="category-product">
          {all_products.map((item,i) => {
            if (props.category===item.category) {
              return  <Items key={i} id={item.id} name={item.name} image={item.image} arrow={item.arrow} title={item.title}/>
            }
            else{
              return null;
            }
          })}
      </div>
    </div>
  )
}

export default Categoryes


 