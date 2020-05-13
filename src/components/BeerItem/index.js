import React, { Fragment, useState } from 'react';
import usePortal from 'react-useportal'
import './styles.css';

//TODO consider using css-in-js if needs be
const BeerItem = ({ beer, onSubmit }) => {
  const { Portal } = usePortal()
  const [ visible, setVisible ] = useState(false);
  
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const handleSubmit = () => {
    onSubmit(beer);
    closeModal();
  }

  return (
    <div>
      <div className="beer-item">
        <button type="button" className="beer-item-btn" onClick={openModal}>
            <img src={beer.image_url} alt={beer.name} />
        </button>
      </div>
      <span className="beer-item-name">{beer.name}</span>
      {visible && 
        <Portal>
          <div className="modal-overlay"></div>
          <div className="modal">
            <button type="button" onClick={closeModal} className="modal-close-btn">CLOSE</button>
            <div className="modal-body">
              <div className="modal-content">
                <div className="modal-blurb">
                  <h2>{beer.name}</h2>
                  <ul>
                    <li>{beer.tagline}</li>
                    <li>abv: {beer.abv}%</li>
                    <li>{`${beer.description.substring(0, 50)}...`}</li>
                    <li>{`${beer.food_pairing.map(text => `${text.substring(0, 50)}, `)}...`}</li>
                  </ul>
                </div>
                <div className="modal-img">
                  <img src={beer.image_url} alt={beer.name}/>
                </div>
              </div>
              <div className="modal-submit">
                <button onClick={handleSubmit}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </Portal>}
    </div>
  )
}

export default BeerItem;