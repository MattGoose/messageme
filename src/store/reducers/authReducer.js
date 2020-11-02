const initState = {
    //initialise authError prop to null to avoid authentication errors on app load
    authError: null
}

//function takes in initial state and action(.type, i.e 'REGISTER_SUCCESS')
//returns the next state of the app following case
//passed down to rootReducer
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'REGISTER_SUCCESS':
            console.log('register success');
            return {
                ...state,
                authError: null,
            }

        case 'REGISTER_ERROR':
            console.log('register error');
            return {
                ...state,
                authError: action.error.message,
            }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
            }

        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.error.message,
            }

        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;

        //default runs on app load
        //simply returns initial state    
        default:
            return state;
    }
}

export default authReducer;