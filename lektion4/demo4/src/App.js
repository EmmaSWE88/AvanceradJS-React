import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import LandingPage from './views/LandingPage';
import Products from './views/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './views/ProductDetails';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Switch>
        <Route path="/" exact component={LandingPage} />  
        <Route path="/products" exact component={Products} />
        <Route path="/products/details/:id" exact>
          <ProductDetails />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;