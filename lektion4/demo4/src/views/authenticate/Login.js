import React from 'react'
import authService from '../../services/AuthService'

export default function Login(props) {
    // console.log(props.history.location.state.from.pathname);

    let returnUrl
    try { returnUrl = props.history.location.state.from.pathname }
    catch { returnUrl = '/'}

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => authService.login(() => {props.history.push(returnUrl)}) }>Login</button>
        </div>
    )
}
