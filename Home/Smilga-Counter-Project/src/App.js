import React from "react";
import Counter from "./Counter";
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';

//redux thunk
import thunk from 'redux-thunk'

//REDUCERS
import countReducer from './countReducer'
import productReducer from './productReducer'
import modalReducer from './modalReducer'

//Get components
import Modal from './Modal'
import Products from './Products'

const middleware = [thunk]

//setup store
const store = createStore(combineReducers({
  countState: countReducer,
  modalState: modalReducer,
  productState: productReducer
}),
composeWithDevTools(applyMiddleware(...middleware)))

const App = () => {
  return <Provider store={store}>
    <Counter random="random value" />
    <Modal />
    <Products />
  </Provider>
};

export default App;
