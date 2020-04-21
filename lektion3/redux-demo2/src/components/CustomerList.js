import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import  Customer from './Customer'

export default () => {
    const customers = useSelector(state => state.customers)
    
    return (
        <table>
            <tbody>
            {
                customers.map(customer => {
                    return (
                        <Customer key={customer.id} customer={customer} />
                    )
                   
                })
            }
            </tbody>
        </table>
    )
}