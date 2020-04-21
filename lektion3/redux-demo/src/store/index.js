import { createStore } from 'redux'
import combinedReducers from './reducers'

// const initState = {
//     products: [],
//     product: {},
//     customers: []
// }

export const store = createStore(
  combinedReducers,
  window.devToolsExtention && window.devToolsExtention() //nu kan vi använda devTools i webbläsaren
)