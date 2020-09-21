const initialState = {
    users: [],
    viewUser: '',
    isLoggedIn: false,
    authError: null,
    token: '',
    info: '',
    status: false,
    page: 1,
    email: '',
    totalPages: 0
};

export default (state = initialState, action) => {
    switch (action.type) {

        case "REGISTER_SUCCESS":
        case "REGISTER_FAIL":
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
        case "NEXT_PAGE":
        case "PREV_PAGE": {
            return {
                ...state,
                page: action.page
            }
        }

        case "TOTAL_PAGES": {
            return {
                ...state,
                totalPages: action.totalPages
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