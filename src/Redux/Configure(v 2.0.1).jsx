import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes(v 1.1.0)';
import { Comments } from './comments(v 1.1.0)';
import { Promotions } from './promotions(v 1.0.0)';
import { Leaders } from './leaders(v 1.0.0)';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}