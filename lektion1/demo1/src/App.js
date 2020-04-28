import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import AddCustomerForm from './components/AddCustomerForm';
import { v4 as uuidv4 } from 'uuid'
import CustomerList from './components/CustomerList';

function App() {

  const [title] = useState('React App')
  const [customers, setCustomers] = useState([])

  function addCustomerCallback(customerName) {
    setCustomers(oldCustomers => {
      return [...oldCustomers, { id: uuidv4(), name: customerName }]
    })
  }

  function removeCustomerCallback(id) {
    const newCustomers = [...customers]
    setCustomers(newCustomers.filter(customer => customer.id !== id))
  }

  useEffect(() => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers'))
    if(storedCustomers)
      setCustomers(storedCustomers)

  }, [])

  useEffect(() => {
    const json = JSON.stringify(customers)
    localStorage.setItem('customers', json)

  }, [customers])


  return (
    <div>
      <Navbar title={title} />
      <AddCustomerForm addCustomerCallback={addCustomerCallback} />
      <CustomerList customers={customers} removeCustomerCallback={removeCustomerCallback} />
    </div>
  );
}

export default App;
