import React from 'react'
import CustomerRow from './CustomerRow'

export default function CustomerList({customers, removeCustomerCallback}) {
    return (
       <div className="container">
            <table className="table">
                <thead className="grey lighten-2">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer => {
                            return <CustomerRow customer={customer} key={customer.id} removeCustomerCallback={removeCustomerCallback} />
                        })
                    }
                 
                </tbody>
                </table>
       </div>

    )
}
