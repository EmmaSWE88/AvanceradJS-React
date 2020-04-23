import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import LandingPage from './views/LandingPage';
import Products from './views/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Switch>
        <Route path="/" exact component={LandingPage} />  
        <Route path="/products" exact component={Products} />
        <Route path="/products/details" exact>
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;