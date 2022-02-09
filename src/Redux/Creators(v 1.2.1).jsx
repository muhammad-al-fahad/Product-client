import * as ActionTypes from './Type(v 1.0.2)';
import { baseUrl } from '../Shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(res => {
        if(res.ok){
            return res;
        }else{
            var err = new Error('Error' + res.status + ':' + res.statusText);
            err.res = res;
            throw err;
        }
    },
    error => {
        var err = new Error(error.message);
        throw err;
    })
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .then(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(res => {
        if(res.ok){
            return res;
        }else{
            var err = new Error('Error' + res.status + ':' + res.statusText);
            err.res = res;
            throw err;
        }
    },
    error => {
        var err = new Error(error.message);
        throw err;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .then(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(res => {
        if(res.ok){
            return res;
        }else{
            var err = new Error('Error' + res.status + ':' + res.statusText);
            err.res = res;
            throw err;
        }
    },
    error => {
        var err = new Error(error.message);
        throw err;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .then(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

