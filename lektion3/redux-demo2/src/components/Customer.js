import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCustomer } from '../store/actions/customers'


export default ({customer}) => {
    const dispatch = useDispatch()

    return (
        <tr> 
            <td>{customer.firstName}</td>
            <td>{customer.LastName}</td>
            <td>{customer.email}</td>
           
            <td><button onClick={() => dispatch(deleteCustomer(customer.id))}>REMOVE</button></td>
        </tr>
    )

}

               
           