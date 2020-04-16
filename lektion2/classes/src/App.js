import React, { Component } from 'react'
import AddProductForm from './components/forms/AddProductForm'

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      products: [],
      cart: [],
      customers: []
    }
    
    this.addProductCallback = this.addProductCallback.bind(this)
  }

  addProductCallback = (product) => {

  }

  render() {
    return (
      <div>
        <AddProductForm addProductCallback={this.addProductCallback} />
      </div>
    )
  }
}
