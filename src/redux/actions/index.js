export const loginCheck = (email, password) => {
    return {
        type: 'LOGIN_CHECK',
        payload: {
            email: email,
            password: password
        }
    }
}