import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //STATE 
  const [products, setProducts] = useState([])

  //LIFECYCLES
 
  useEffect(() => {
    console.log('created')
    const storedProducts = JSON.parse(sessionStorage.getItem('products'))
    if(storedProducts)
      setProducts(storedProducts)
  }, [])
 
  useEffect(() => {
    console.log('updated')
    const storedProducts = JSON.stringify(products)
    sessionStorage.setItem(storedProducts)
  }, [products])

  //RENDER - RENDERING
  return (
    <div>
     
    </div>
  );
}

export default App;
