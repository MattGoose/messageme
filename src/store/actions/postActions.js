export const addPostAction = (post) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const id = getState().firebase.auth.uid;

        firestore.collection('posts').add({
            ...post,
            postedBy: profile.firstName + ' ' + profile.lastName,
            postedById: id,
            postedAt: new Date(),
        }).then(() => {
            dispatch({ type: 'ADD_POST', post });
        }).catch((error) => {
            dispatch({ type: 'ADD_POST_ERROR', error });
        })
    }
}