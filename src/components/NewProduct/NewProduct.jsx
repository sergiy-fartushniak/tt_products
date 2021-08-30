import React, { useState } from 'react';

import './NewProduct.scss';

export const NewProduct = ({ modal, showModal }) => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('0g');
  const [count, setCount] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = () => {
    const product = {
      name,
      count,
      weight,
      imgUrl,
    };
  };

  const addNewProduct = (product) => {

  };

  if (!modal) {
    return null;
  }

  return (
    <div className="NewProduct">
      <div className="NewProduct__window">
        <h2 className="title">New Product</h2>
        <form className="NewProduct__form">
          <label className="NewProduct__input-label">
            <input
              className="NewProduct__input"
              placeholder="Name"
              name="name"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </label>
          <label className="NewProduct__input-label">
            <input
              className="NewProduct__input"
              placeholder="Amount"
              name="count"
              type="text"
              onChange={event => setCount(event.target.value)}
            />
          </label>
          <label className="NewProduct__input-label">
            <input
              className="NewProduct__input"
              placeholder="Weight"
              name="weight"
              type="text"
              onChange={event => setWeight(event.target.value)}
            />
          </label>
          <label className="NewProduct__input-label">
            <input
              className="NewProduct__input"
              placeholder="Image URL"
              name="imgUrl"
              type="text"
              onChange={event => setImgUrl(event.target.value)}
            />
          </label>
          <div className="NewProduct__buttons">
            <button
              type="button"
              className="button"
            >
              Add
            </button>
            <button
              type="button"
              className="button"
              onClick={() => showModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
