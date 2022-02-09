import { DISHES } from '../Shared/dishes(v 2.0.0)';
import { COMMENTS } from '../Shared/comments(v 1.0.0)';
import { PROMOTIONS } from '../Shared/promotions(v 1.0.0)';
import { LEADERS } from '../Shared/leaders(v 1.0.0)';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};