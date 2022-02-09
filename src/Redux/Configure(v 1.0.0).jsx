import {createStore} from 'redux';
import { Reducer, initialState } from './Reducer(v 1.0.0)'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}