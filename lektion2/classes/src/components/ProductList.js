import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div  style={{ 'marginTop': '40px'}}>
                {
                    this.props.products.map(product => {
                        return <Product key={product.id} product={product} editProductCallback={this.props.editProductCallback} />
                    })
                }
            </div>
        )
    }
}