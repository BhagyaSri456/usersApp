export const setLogin = (loginData) => {
    return {
        type: "SET_LOGIN_STATE",
        payload: loginData
    }
}

export const loginFail = (authError) => {
    return {
        type: "LOGIN_FAIL",
        authError
    }
}

export function userFetch(loginInput) {
    return ({ type: 'USER_FETCH', ...loginInput })
};


export const registerSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: data
    }
}
export const registerFail = (error) => {
    return {
        type: "REGISTER_FAIL",
        payload: error
    }
}

export function userRegister(userData) {
    return ({ type: 'USER_REGISTER', ...userData })
};

export const loadUsers = (users) => {
    return {
        type: 'LOAD_USERS',
        users
    }
}

export const prevPage = (currentPage) => {
    return {
        type: 'PREV_PAGE',
        page: currentPage - 1
    }
}
export const nextPage = (currentPage) => {
    return {
        type: 'NEXT_PAGE',
        page: currentPage + 1
    }
}

export const totalPages = (totalPages) => ({
    type: 'TOTAL_PAGES',
    totalPages
});

export function getUsers(pageNo = 1) {
    return ({ type: 'GET_USERS', pageNo });
}

export const loadUserData = (userData) => {
    return {
        type: 'LOAD_USER_DATA',
        userData
    }
}

export function getUserDetails(userId) {
    return ({ type: 'USER_DETAILS', userId });
}


export const deleteUser = () => {
    return {
        type: 'DELETE_USER'
    }
}

export const deleteUserData = () => {
    return {
        type: 'DELETE_USER_DATA'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}