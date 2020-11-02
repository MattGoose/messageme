//function called at account register
//returns newUser with account details
export const registerAction = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        //COMMENT
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        //cretase a user and generates an id for them
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,
        ).then((resp) => {
            //grabs user id from above and sets values under that id in users collection
            return firestore.collection('users').doc(resp.user.uid).set({
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                accountCreated: new Date(),
            })
        }).then(() => {
            dispatch({ type: 'REGISTER_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'REGISTER_ERROR', error })
        })
    }
}

//function called at login
//returns credentials used to authenticate user
export const loginAction = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        //COMMENT
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error })
        })
    }
}

//function called at logout
export const logoutAction = () => {
    return (dispatch, getState, { getFirebase }) => {
        //COMMENT
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}