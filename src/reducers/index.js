import { combineReducers } from 'redux';
import products from './productsReducer';
import comments from './commentsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  products,
  comments,
  routing: routerReducer
});

export default rootReducer;
