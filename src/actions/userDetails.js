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

export const startLogin = (loginInput) => {
    const email = loginInput.email;
    return (dispatch) => {
        return fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInput)
        })
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.status);
                }
            })
            .then(data => {
                dispatch(setLogin({ ...data, isLoggedIn: true, authError: null, email }));
            })
            .catch((error) => {
                dispatch(loginFail('Please enter valid email and password'));
                return error;
            })
    }
}

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
export const registration = (userdata) => {
    return (dispatch) => {
        fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata)
        })
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.status);
                }
            })
            .then(data => {
                dispatch(registerSuccess({ info: '', status: true }));
                const hasError = data.error != null;
                return data;
            })
            .catch((error) => {
                dispatch(registerFail({ info: 'Please fill valid email & password', status: false }));
                return error;
            });
    }
}

export const LoadUsers = (users) => {
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
export const GetUsers = (pageNo = 1) => {
    return (dispatch, getState) => {
        const page = getState().page;
        fetch(`https://reqres.in/api/users?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                const data = result.data;
                dispatch(LoadUsers(data));
            });
    }
}

export const loadUserData = (userData) => {
    return {
        type: 'LOAD_USER_DATA',
        userData
    }
}

export const getUserDetails = (userId) => {
    return (dispatch) => {
        fetch(`https://reqres.in/api/users/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((result) => {
                const userData = result.data;
                dispatch(loadUserData(userData));
            });
    }
}

export const deleteUser = () => {
    return {
        type: 'DELETE_USER'
    }
}
export const deleteUserData = (id) => {
    return (dispatch) => {
        fetch(`https://reqres.in/api/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => {
                dispatch(deleteUser(res))
            })
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}