import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div>
      
    <div>
      <div>
        <ProductForm />
      </div>
      <ProductList />   
    </div>

    <hr />
    
    <div>
      <div>
        <CustomerForm />
      </div>
      <CustomerList />   
    </div>
  </div>
);
}
export default App;
