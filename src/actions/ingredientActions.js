import ingredientApi from '../api/ingredientApi.js';
import * as types from './actionTypes';  

export function loadIngredientsSuccess(ingredients) {  
  return {type: types.LOAD_INGREDIENTS_SUCCESS, ingredients};
}

export function loadIngredients() {  
  return function(dispatch) {
    return ingredientApi.getAllIngredients().then(ingredients => {
      dispatch(loadIngredientsSuccess(ingredients.data));
    }).catch(error => {
      throw(error);
    });
  };
}