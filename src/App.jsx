import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/general.scss';

import productsFromServer from './api/products.json';
import { ProductsList } from './components/ProductsList';
import { ProductDetails } from './components/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(0);

  useEffect(() => {
    setProducts(productsFromServer.products);
  }, []);

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
    <div className="App">
      <header className="App__header">
        <button
          type="button"
          onClick={sortByName}
          className="button"
        >
          Sort by name
        </button>
        <button
          type="button"
          onClick={sortByAmount}
          className="button"
        >
          Sort by amount
        </button>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <ProductsList
            products={products}
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
          />
        </div>

        <div className="App__content">
          {selectedProductId
            ? (
              <ProductDetails
                products={products}
                selectedProductId={selectedProductId}
              />
            ) : (
              <h2>Please choose product</h2>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;
