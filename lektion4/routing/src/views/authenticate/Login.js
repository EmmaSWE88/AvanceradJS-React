import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/actions/authenticate'

export default function Login(props) {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authenticate.isAuthenticated)
    
    if(isAuth)
    props.history.replace('/')

    const _login = () => {
        dispatch(login())      
        
        try   { props.history.push(props.history.location.state.from.pathname) }
        catch { props.history.push('/') }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={_login}>Login</button>
        </div>
    )
}