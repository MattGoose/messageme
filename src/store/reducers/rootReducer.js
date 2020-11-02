import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import postReducer from './postReducer';
import authReducer from './authReducer';

//stores functions (i.e boardReducer) on state (i.e board)
//state is passed to index.js via rootReducer for global use
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    //syncs auth status
    firebase: firebaseReducer,
    //store data from firestore on firestore property
    firestore: firestoreReducer,
})

export default rootReducer;