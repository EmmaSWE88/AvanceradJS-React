import React from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
const secretKey = '123123123adsfaf'

function App() {
  const [cookies, setCookie] = useCookies(['consent', 'shoppingcart']);

  const setLocalStorage = () => {
    localStorage.setItem('local', 'här kan bara en text stå')
    // localStorage.getItem('local')
    // localStorage.removeItem('local')
  }

  const setSessionStorage = () => {
    sessionStorage.setItem('session', 'här kan bara en text stå')
    // sessionStorage.getItem('session')
    // sessionStorage.removeItem('session')
  }

  const setConsent = () => {
    setCookie('consent', true, { path: '/', maxAge: 60 })
  }
 
  const addToCart = () => {
    const cart = jwt.sign({ id: 1, product: 'product 1' }, secretKey)
    setCookie('shoppingcart', cart, { path: '/', maxAge: 3600 * 24 * 7 })
  }

  return (
    <div className="container mt-5">
      <button onClick={setLocalStorage}>LocalStorage</button>
      <button onClick={setSessionStorage}>SessionStorage</button>   
      {
        cookies.consent ? '' : <button onClick={setConsent}>Accept Cookies</button>
      }
      <button onClick={addToCart}>Add To Cart</button>   
      
    </div>
  );
}

export default App;
