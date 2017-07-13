import initialState from './initialState';
import * as types from '../actions/actionTypes';  

export default function ingredientReducer(state = initialState.ingredients, action) {  
  switch(action.type) {
    case types.LOAD_INGREDIENTS_SUCCESS:
      return action.ingredients
    default: 
      return state;
  }
}