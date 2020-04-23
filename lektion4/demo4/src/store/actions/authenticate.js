import actiontypes from '../actionstypes'

export const login = () => {
    return {
        type: actiontypes().authenticate.login

    }
}
export const logout = () => {
    return {
        type: actiontypes().authenticate.logout

    }
}