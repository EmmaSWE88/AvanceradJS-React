import React, { Component } from 'react'

export default class Product extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.product.id,
            name: this.props.product.name,
            desc: this.props.product.desc
        }
    }

    onChangeId = (e) => {
        this.setState({ id : e.target.value })
    }

    onChangeName = (e) => {
        this.setState({ name : e.target.value })
    }
    
    onSubmit = (e) => {
        e.preventDefault()

        this.props.editProductCallback({
            id: this.state.id,
            name: this.state.name,
            desc: this.state.desc
        })
    }
    
    render() {

        const {id, name} = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" disabled name="id" value={id} onChange={this.onChangeId} />
                <input type="text" name="name" value={name} onChange={this.onChangeName} />
                <button type="submit">Spara</button>
            </form>
        )
    }
}