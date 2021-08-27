import React from 'react';
import PropTypes from 'prop-types';
import './ProductsList.scss';
import { Link } from 'react-router-dom';

export const ProductsList = ({
  products,
  setProducts,
  selectedProductId,
  setSelectedProductId,
}) => {

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
                  <Link to="/details">
                    <button
                      type="button"
                      className="ProductsList__button button"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      Details
                    </button>
                  </Link>
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
