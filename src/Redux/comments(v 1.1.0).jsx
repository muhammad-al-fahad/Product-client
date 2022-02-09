import { COMMENTS } from '../Shared/comments(v 1.0.0)';
import * as ActionTypes from './Type(v 1.0.0)';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT : 
          var comment = action.payload;
          comment.id = state.length;
          comment.date = new Date().toISOString();
          return state.concat(comment);
        default:
          return state;
      }
};
