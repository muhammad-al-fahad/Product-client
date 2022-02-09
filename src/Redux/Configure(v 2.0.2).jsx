import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes(v 1.1.0)';
import { Comments } from './comments(v 1.1.2)';
import { Promotions } from './promotions(v 1.1.0)';
import { Leaders } from './leaders(v 1.1.0)';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './Form(v 1.0.0)';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}