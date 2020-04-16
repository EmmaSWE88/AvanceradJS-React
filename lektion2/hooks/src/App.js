import React, { useState, useEffect } from 'react';
import './App.css';
import AddProductForm from './components/forms/AddProductForm';
import ProductList from './components/ProductList';


function App() {
  //STATE 
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  //LIFECYCLES
 
  useEffect(() => {
    setProducts(getProducts('http://localhost:9998/api/products'))

    setProducts(getProducts('http://localhost:9998/api/products')) //alternativ för att hämta produkter

    // console.log('created')
    // console.log('get products from API')
    // const productsFromApi = [] //fetch/axios.get
    // setProducts(productsFromApi) 

    // const storedProducts = JSON.parse(sessionStorage.getItem('products'))
    // if(storedProducts)
    //   setProducts(storedProducts)
  
  }, [])
 
  useEffect(() => {



    // console.log('updated')
    // console.log('get products from API')

    // const storedProducts = JSON.stringify(products)
    // sessionStorage.setItem('products', storedProducts)

  }, [products])

  //FUNCTIONS
  function addProductCallback(newProduct){
    postProduct('http://localhost:9998/api/products', newProduct)
    setProducts(getProducts('http://localhost:9998/api/products'))

    // setProducts(oldProducts => {
    //   return[...oldProducts, newProduct]
    // })
  }

  function getProducts(url){
    fetch(url).then(res => res.json())
    .then(data => {return data})
  }
  //RENDER - RENDERING
  return (
    <div>
     <AddProductForm addProductCallback={addProductCallback} />

      {
        products.map(product => {
        return <ProductList product={product} key={product.id} />
        })
      }

    </div>
  );
}

export default App;
