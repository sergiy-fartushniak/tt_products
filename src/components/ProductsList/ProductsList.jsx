import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';
import { NavLink } from 'react-router-dom';
import { NewProduct } from '../NewProduct/NewProduct';

export const ProductsList = ({
  products,
  setProducts,
  selectedProductId,
  setSelectedProductId,
}) => {

  const [modal, setModal] = useState(false);

  const sortByName = () => {
    const sortedByName = [...products].sort(
      (prev, current) => prev.name.localeCompare(current.name),
    );

    setProducts(sortedByName);
  };

  const sortByAmount = () => {
    const sortedByAmount = [...products].sort(
      (prev, current) => prev.count - current.count,
    );

    setProducts(sortedByAmount);
  };

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <header className="App__header">
        <button
          type="button"
          onClick={sortByName}
          className="ProductsList__button button"
        >
          Sort by name
        </button>
        <button
          type="button"
          onClick={sortByAmount}
          className="ProductsList__button button"
        >
          Sort by amount
        </button>
        <button
          type="button"
          onClick={showModal}
          className="ProductsList__button button"
        >
          New Product
        </button>
        <NewProduct showModal={showModal} modal={modal} />
      </header>
      <div className="ProductsList">
        <h2>Products:</h2>

        <ul className="ProductsList__list">
          {products.map(product => (
            <li key={product.id} className="ProductsList__item">
              <div className="ProductsList__card">
                <div>
                  <p>{`Product #${product.id}`}</p>
                  <p>{product.name}</p>
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div>
                  <p>{`Amount: ${product.count}`}</p>

                </div>
              </div>
              {selectedProductId === product.id
                ? (
                  <button
                    type="button"
                    className="ProductsList__button button"
                    onClick={() => setSelectedProductId(0)}
                  >
                    Close
                  </button>
                ) : (
                  <NavLink to="/details">
                    <button
                      type="button"
                      className="ProductsList__button button"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      Details
                    </button>
                  </NavLink>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// ProductsList.propTypes = {
//   setSelectedPostId: PropTypes.func.isRequired,
//   selectedPostId: PropTypes.number.isRequired,
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     userId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   })).isRequired,
// };
