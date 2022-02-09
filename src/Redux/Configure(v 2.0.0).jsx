import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes(v 1.0.0)';
import { Comments } from './comments(v 1.1.0)';
import { Promotions } from './promotions(v 1.0.0)';
import { Leaders } from './leaders(v 1.0.0)';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}