import actiontypes from '../actiontypes'

export const login = () => {
    return {
        type: actiontypes().authenticate.login,
        payload: true
    }
}

export const logout = () => {
    return {
        type: actiontypes().authenticate.logout,
        payload: false
    }
}