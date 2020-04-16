import React, { Component } from 'react'
import AddProductForm from './components/forms/AddProductForm'
import ProductList from './components/ProductList'

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      products: [],
      cart: [],
      customers: []
    }
    
    this.addProductCallback = this.addProductCallback.bind(this)
    this.editProductCallback = this.editProductCallback.bind(this)
  }

  addProductCallback = (product) => {
    this.setState({ products:[...this.state.products, product] })
 
  }
  editProductCallback = (product) => {  
    this.setState({ products: [...this.state.products.filter(p => p.id !== product.id), product] })  
  }

  componentDidMount() {
    const storedProducts = JSON.parse(localStorage.getItem('products'))
    if(storedProducts)
    this.setState({ products: storedProducts })
  }

  componentDidUpdate() {
   localStorage.setItem('products', JSON.stringify(this.state.products))
  
  }

  render() {
    return (
      <div style={{ 'marginTop': '40px','marginLeft': '40px'}}>
        <AddProductForm addProductCallback={this.addProductCallback} />
        <ProductList products={this.state.products} editProductCallback={this.editProductCallback} />
      </div>
    )
  }
}
