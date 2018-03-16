import * as types from '../constants/actionTypes';
import axios from 'axios';

export const fetchProductsStart = () => ({
  type: types.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsError = error => ({
  type: types.FETCH_PRODUCTS_ERROR,
  payload: { error }
});

export function fetchProducts(){
  return dispatch => {
    dispatch(fetchProductsStart);
    return axios.get('http://private-5815fe-recommendationsknip.apiary-mock.com/products')
    .then(response => {
      dispatch(fetchProductsSuccess(response.data));
      return response.data;
    })
    .catch(error => dispatch(fetchProductsError(error)));
  }
}
