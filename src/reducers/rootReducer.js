import {combineReducers} from 'redux';  
import products from './productReducer';
import ingredients from './ingredientReducer';

const rootReducer = combineReducers({  
  products, ingredients
})

export default rootReducer;  