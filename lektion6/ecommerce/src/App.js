import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, checkoutCart } from './store/actions/cartActions';

function App() {
  const dispatch = useDispatch()
  const shoppingcart = useSelector(state => state.cart.shoppingcart)
  const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
  const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

  const add = (product) => {
    dispatch(addToCart(product))
  }

  const remove = (id) => {
    dispatch(removeFromCart(id))
  }
  const save = (shoppingcart) => {
    dispatch(checkoutCart(shoppingcart))
  }


  return (
    
    <div className="container mt-4">
      <div className="mb-4">
      {
        shoppingcart.map(product => {
          return(
            <div key={product.id}>
              <div>
                <div> <strong>{product.name}</strong></div>
                <div className="text-muted">{product.quantity} x {product.price}</div>
              </div>
              <div>
                <button onClick={add}>+</button>
                <button onClick={() => remove(product.id)}>-</button>
              </div>
            </div>
          )
        })
      }
    </div>
    <p>Total Amount: {totalCartAmount}</p>
    <p>Total Quantity: {totalCartQuantity}</p>
      <button onClick={() => add( {id:1, name: 'product 1', price: 100, quantity: 1})}>ADD PRODUCT 1</button>
      <button onClick={() => add( {id:2, name: 'product 2', price: 130, quantity: 1})}>ADD PRODUCT 2</button>
      <button onClick={() => save()}>CHECKOUT</button>
    </div>
  );
}

export default App;
