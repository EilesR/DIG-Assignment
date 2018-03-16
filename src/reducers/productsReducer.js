import {FETCH_PRODUCTS_START,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR } from '../constants/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload.products,
        loading: false,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}