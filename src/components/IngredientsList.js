import React from 'react';
import PropTypes from 'prop-types';

const IngredientsList = ({ingredients}) => {  
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => 
        <li key={ingredient.id}>{ingredient.attributes.name}</li>
        )}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {  
  ingredients: PropTypes.array.isRequired
};

export default IngredientsList;  