import { createStore } from 'redux'
import combinedReducers from './reducers'


export const store = createStore(
  combinedReducers,
  window.devToolsExtention && window.devToolsExtention() 
  //nu kan vi använda devTools i webbläsaren
)