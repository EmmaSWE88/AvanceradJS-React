import actiontypes from '../actionstypes'

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