import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../store/actions/customers'


export default () => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
  
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addCustomer({
            id: uuidv4(),
            firstName,
            lastName,
            email
            
        }))

        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={onChangeFirstName} placeholder="First Name" />
            <input type="text" name="lastName" value={lastName} onChange={onChangeLastName} placeholder="Last Name" />
            <input type="text" name="email" value={email} onChange={onChangeEmail} placeholder="Email" />
            <button type="submit">ADD</button>

        </form>
    )
}