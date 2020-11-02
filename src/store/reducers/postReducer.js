const initState = {
    posts: []
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            console.log('ADD_POST', action.post);
            return state;
        case 'ADD_POST_ERROR':
            console.log('ADD_POST_ERROR', action.error);
            return state;
        default:
            return state;
    }
}

export default postReducer;