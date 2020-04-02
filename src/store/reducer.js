const initislState =  {
    userState: {
        logged: false,
        email: '',
        username: ''
    }
}

const rootReducer = (state = initislState, action) => {    
    switch (action.type) {
        case 'LOGIN_DONE':
            return {
                ...state,
                userState: {
                    logged: true,
                    id: action.payload.id,
                    token: action.payload.token,
                    email: action.payload.email,
                    username: action.payload.username,
                }
            }
            case 'LOGOUT_DONE':
                return {
                    ...state,
                    userState: {
                        logged: false,
                        id: null,
                        token: null,
                        email: null,
                        username: null,
                    }
                }
        default: return state;
    }
}

export default rootReducer