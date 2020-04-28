import actiontypes from '../actionstypes'

const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated')) || false

const initState = {
    isAuthenticated : isAuthenticated,
    currentUser: {},
    token: ''
}

export default(state = initState, action) => {
    switch(action.type) {
        case actiontypes().authenticate.login:
            state.isAuthenticated = action.payload
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            return state

        case actiontypes().authenticate.logout:
            state.isAuthenticated = action.payload
            sessionStorage.setItem('isAuthenticated', state.isAuthenticated)
            return state

        default:
            return state
    }
}