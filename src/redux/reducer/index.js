let initState = {
    loginFlag : false,
    users: [
        {
            email: 'user@gmail.com',
            password: 'password'
        }
    ]
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_CHECK': {
            var tempFlag = false;
            state.users.forEach((item)=>{
                if(item.email === action.payload.email && item.password === action.payload.password) tempFlag = true;
            })
            return {
                ...state,
                loginFlag : tempFlag
            }
        }
        default: return state
    }

}

export default reducer;