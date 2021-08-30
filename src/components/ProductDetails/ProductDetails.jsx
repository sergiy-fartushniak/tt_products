import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader';
import './ProductDetails.scss';

import { getComments } from '../../api/products';

export const ProductDetails = ({ products, selectedProductId }) => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(true);

  useEffect(() => {
    const addComments = async() => setComments(
      await getComments(selectedProductId),
    );

    addComments();
    setProduct(products[selectedProductId - 1]);
  }, [selectedProductId]);

  return (
    !product
      ? (
        <Loader />
      ) : (
        <div className="ProductDetails">
          <h2>Product details:</h2>

          <section className="ProductDetails__product">
            {product
            && (
            <div className="ProductDetails__card">
              <p>{`Product #${product.id}`}</p>
              <p>{product.name}</p>
              <img src={product.imageUrl} alt={product.name} />
              <p>{`Weight: ${product.weight}`}</p>
              <p>{`Size: ${product.size.width} x ${product.size.height}`}</p>
              <p>{`Amount: ${product.count}`}</p>
            </div>
            )}
          </section>

          <section className="ProductDetails__comments">
            <button
              type="button"
              onClick={() => setCommentsVisible(!commentsVisible)}
              className="button"
            >
              {`${commentsVisible
                ? 'Hide'
                : 'Show'} ${comments.length} comments`}
            </button>
            {commentsVisible
            && (
              <ul className="ProductDetails__list">
                {comments.map(comment => (

                  <li className="ProductDetails__list-item" key={comment.id}>
                    <button
                      type="button"
                      className="ProductDetails__remove-button button"
                    >
                      X
                    </button>
                    <p>{comment.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* <section>
            <div className="ProductDetails__form-wrapper">
              <NewCommentForm
                selectedProductId={selectedProductId}
                setComments={setComments}
              />
            </div>
          </section> */}
        </div>
      )
  );
};

ProductDetails.propTypes = {
  selectedProductId: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    size: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
};
