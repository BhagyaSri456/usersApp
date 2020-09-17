const initialState = {
    users: [],
    viewUser: '',
    isLoggedIn: false,
    authError: null,
    token: '',
    info: '',
    status: false,
    page: 1,
    email: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGIN_STATE": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "LOGIN_FAIL": {
            return {
                ...state,
                authError: action.authError
            }
        }
        case "REGISTER_SUCCESS": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "REGISTER_FAIL": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "LOAD_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case "DELETE_USER": {
            return {
                ...state
            }
        }
        case "LOAD_USER_DATA": {
            return {
                ...state,
                viewUser: action.userData
            }
        }
        case "PREV_PAGE": {
            return {
                ...state,
                page: action.page
            }
        }
        case "NEXT_PAGE": {
            return {
                ...state,
                page: action.page
            }
        }
        case 'LOGOUT': {
            return {
                ...initialState
            }
        }
        default: return state;
    }
} 