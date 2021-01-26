import { applyMiddleware, createStore } from 'redux';
import rootReducers from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
 return createStore(
     rootReducers,
     initialState,
     applyMiddleware(thunk, reduxImmutableStateInvariant())
 )
}