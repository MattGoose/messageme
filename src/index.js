import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';

import rootReducer from './store/reducers/rootReducer';

import 'firebase/firestore';
import firebase from './config/fbConfig';

//imports global state into the root level
//thunk provides custom middleware to allow async actions
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore
  })),
  reduxFirestore(firebase),
));

//LOOK INTO
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

//LOOK INTO
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
