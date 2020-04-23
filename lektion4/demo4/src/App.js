import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import LandingPage from './views/LandingPage';
import Products from './views/product/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './views/product/ProductDetails';
import NotFound from './views/NotFound';
import Admin from './views/admin/Admin';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './views/authenticate/Login';
import AdminProducts from './views/admin/AdminProducts';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Switch>
        
        <Route path="/" exact component={LandingPage} /> 
        <Route path="/login" exact component={Login} /> 
        <Route path="/products" exact component={Products} />
        <Route path="/products/details/:id" exact component={ProductDetails} />
       

        <ProtectedRoute path="/admin" exact component={Admin} /> 
        <ProtectedRoute path="/admin/products" exact component={AdminProducts} /> 

       
        {/* <Route path="/products/match/:id" exact component={ProductDetails} /> */}
        {/* <Route path="/products/details/:id" exact>
          <ProductDetails />
        </Route> */}

      <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;