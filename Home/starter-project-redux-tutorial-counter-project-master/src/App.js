import React from "react";
import Counter from "./Counter";
import {createStore} from 'redux'

//setup initial state
const defaultState = {
  count:76,
  name:'bob'
}

//setup reducer
function reducer(state,action){
  console.log({state,action});
  return state
}

//setup store
const store = createStore(reducer,defaultState)

console.log(store.getState());


const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
