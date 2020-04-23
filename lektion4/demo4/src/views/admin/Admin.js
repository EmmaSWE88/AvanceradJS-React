import React from 'react'
import authService from '../../services/AuthService'

export default function Admin(props) {
    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={() => authService.logout(() => {props.history.push("/")}) }>Logout</button>
        </div>
    )
}
