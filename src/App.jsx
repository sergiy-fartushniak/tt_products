import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import './styles/general.scss';

import productsFromServer from './api/products.json';
import { ProductsList } from './components/ProductsList';
import { ProductDetails } from './components/ProductDetails';
import { Header } from './components/Header';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(0);

  useEffect(() => {
    setProducts(productsFromServer.products);
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>

        <main className="App__main">
          <Route path="/" exact>
            <div className="App__sidebar">
              <ProductsList
                products={products}
                setProducts={setProducts}
                selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}
              />
            </div>
          </Route>

          <Route path="/details">
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
          </Route>
        </main>
      </Switch>
    </div>
  );
};

export default App;
