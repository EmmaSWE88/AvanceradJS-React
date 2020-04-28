import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authenticate'

export default function Admin(props) {
    const dispatch = useDispatch()

    const _logout = () => {
        dispatch(logout())      
        props.history.push('/')
    }


    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={_logout}>Logout</button>
        </div>
    )
}