import * as types from '../constants/actionTypes';

export const addComment = (comment,product_id) => ({
  type: types.ADD_COMMENT,
  payload: { comment,product_id }
});