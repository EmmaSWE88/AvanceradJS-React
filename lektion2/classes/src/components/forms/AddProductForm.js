import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class AddProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            desc: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onChange = (e) => { //motsvarar setState
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        this.props.addProductCallback({
            id: uuidv4(),
            name: this.state.name,
            desc: this.state.desc
        })
    }

   
    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this, this.onSubmit) }>
                <input type="text" name="name" value={ this.state.name } onChange={ this.onChange}/>
                <input type="text" name="desc" value={ this.state.desc } onChange={ this.onChange}/>
                <button type="submit">Lägg till</button>
            </form>
        )
    }
}
