import React from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';

export const ProductsList = ({
  products,
  selectedProductId,
  setSelectedProductId,
}) => (
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
              <button
                type="button"
                className="ProductsList__button button"
                onClick={() => setSelectedProductId(product.id)}
              >
                Details
              </button>
            )}

        </li>
      ))}
    </ul>
  </div>
);

// ProductsList.propTypes = {
//   setSelectedPostId: PropTypes.func.isRequired,
//   selectedPostId: PropTypes.number.isRequired,
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     userId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   })).isRequired,
// };
