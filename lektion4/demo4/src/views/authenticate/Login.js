import React,{ useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/actions/authenticate'

export default function Login(props) {
    // console.log(props.history.location.state.from.pathname);
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.authenticate.isAuthenticated)

    useEffect(() => {
        if(isAuthenticated) {
            try { props.history.push(props.history.location.state.from.pathname) }
            catch { props.history.push('/')}
        }
    },[isAuthenticated, props])



    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => dispatch(login())}>Login</button> 

            {/* <button onClick={() => authService.login(() => {props.history.push(returnUrl)}) }>Login</button> */}
        </div>
    )
}
