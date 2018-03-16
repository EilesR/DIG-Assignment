import {ADD_COMMENT } from '../constants/actionTypes';

var localStorage;
var items;
try {
  localStorage = window.localStorage;
  items = JSON.parse(localStorage.getItem("comments"));
  if(typeof items != 'object' || items == null){
    items={};
  }
} catch(e) {
  items = {};
}

const initialState = {
  items: items,
};


export default function commentsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:{
      var items = {...state.items};
      if(typeof items[action.payload.product_id] != 'undefined'){
        items[action.payload.product_id]=[...items[action.payload.product_id],action.payload.comment];
      }else{
        items[action.payload.product_id]=[action.payload.comment];
      }
      try {
        window.localStorage.setItem('comments',JSON.stringify(items));
      } catch(e) {

        return {
          ...state,
          items:items
        };
      }

      return {
        ...state,
       items:items
      };
    }
      

    default:
      return state;
  }
}