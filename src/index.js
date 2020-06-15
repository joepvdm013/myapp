import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'


import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase,  isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbconfig from './config/fbconfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbconfig)
    )
);


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    // attachAuthIsReady: true
  }
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded> <App /></AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();



//versie 1
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
// import fbconfig from './config/fbconfig'
// import firebase from 'firebase/app'
//
// const store = createStore(rootReducer,
//   compose(
//    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//    reduxFirestore(firebase, fbconfig),
//    // reactReduxFirebase(firebase, fbconfig)
//   )
// );
//
// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
