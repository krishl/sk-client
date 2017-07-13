export default class IngredientApi {  
  static getAllIngredients() {
    return fetch('http://localhost:3001/api/v1/ingredients').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}