import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './styles.css';
import { AiOutlineLine } from "react-icons/ai";
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { selectBasketItems, selectTotalAbv } from './selectors';
import { addItem, removeItem, removeAllOfType } from './actions';

const Basket = () => {
  const beers = useSelector(selectBasketItems);
  const total = useSelector(selectTotalAbv);
  const dispatch = useDispatch();
  const [ open, setOpen ] = useState(false);
  const toggleBasket = () => {
    setOpen(!open);
  };

  return (
    <div className={`basket ${open ? 'open' : ''}`}>
      <button className="centered grip" onClick={toggleBasket}><AiOutlineLine /></button>
      <span className="centered basket-title"><RiShoppingBasket2Line />Shopping Cart</span>
      <ul>
        {beers.map(beer =>
          <li>
            <div className="img-wrap">
              <span className="price">{beer.abv}</span>
              <img src={beer.image_url} alt={beer.name}/>
            </div>
            <div className="info-wrap">
              <h3>{beer.name}</h3>
              <span>additional info</span>
            </div>
            <div className="count-wrap">
              <button type="button" className="dec" onClick={() => dispatch(removeItem(beer))} >-</button>
              <span>{beer.quantity}</span>
              <button type="button" className="inc" onClick={() => dispatch(addItem(beer))} >+</button>
            </div>
            <button type="button" className="bin" onClick={() => dispatch(removeAllOfType(beer))} ><BsTrash /></button>
          </li>
        )}
      </ul>
      <div className="total"><span>Total:</span><span>{total}</span></div>
    </div>
  )
}

export default Basket;