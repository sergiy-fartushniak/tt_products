import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NewCommentForm } from '../NewCommentForm';
import { Loader } from '../Loader';
import './ProductDetails.scss';

import commentsFromServer from '../../api/products.json';

export const ProductDetails = ({ products, selectedProductId }) => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(true);

  useEffect(() => {
    setComments(commentsFromServer.comments.filter(
      comment => comment.productId === selectedProductId,
    ));

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

          <section>
            <div className="ProductDetails__form-wrapper">
              <NewCommentForm
                selectedProductId={selectedProductId}
                setComments={setComments}
              />
            </div>
          </section>
        </div>
      )
  );
};

// ProductDetails.propTypes = {
//   selectedPostId: PropTypes.number.isRequired,
// };
