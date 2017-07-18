import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  content: {
    width: '100%',
    padding: '5px',
    border: '1px solid #ddd',
    height: 'auto'
  }
})

const Similarities = ({products}) => {
  let all_ingredients = []
  products.forEach(product => product.ingredients.forEach(ingredient => all_ingredients.push(ingredient.name.toLowerCase())))

  const count = all_ingredients.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})
  
  const duplicates = Object.keys(count).filter((a) => count[a] > 1)

  return (
    <div className={css(sheet.content)}>
      <h4>Here are the ingredients common to all selected products:</h4>
      {duplicates.join(", ")}
    </div>
  );
};

Similarities.propTypes = {  
  products: PropTypes.array.isRequired
};


export default Similarities;  