import React, { Component } from 'react';  
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {StyleSheet, css} from 'aphrodite-jss';
import IngredientsList from '../IngredientsList';

const sheet = StyleSheet.create({
  content: {
    width: '69%',
    height: '100%',
    float: 'right',
    overflowY: 'auto',
    position: 'relative'
  },
})

class ProductShow extends Component {  
  // constructor(props) {
  //   super(props);
  //   this.state = {comparing: false};
  // }

  // toggleCompare = () => {
  //   this.setState({comparing: !this.state.comparing})
  // }

  render() {
  //   if (this.state.comparing) {
  //     return (
  //       <div>
  //         common ingredients
  //       </div>
  //     )
  //   }

    return (
      <div className={css(sheet.content)}>
        <h2>{this.props.product.attributes.name}</h2>
        Brand: {this.props.product.attributes.brand}
        <IngredientsList ingredients={this.props.ingredients} /> 
      </div>
    );
  }
};

function retrieveIngredients(ingredients, product) {  
  let ids = product.relationships.ingredients.data.map(ingId => ingId.id)
  let retrieved = ingredients.filter(ingredient => {
    return ids.includes(ingredient.id)
  })
  return retrieved
}

ProductShow.propTypes = {  
  product: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {  
  let product = {attributes: {}};
  let ingredients = [];
  if (state.products.length > 0) {
    product = Object.assign({}, state.products.find(product => product.id === 
      ownProps.match.params.id)
    )
    if (product.id && product.relationships.ingredients.data.length > 0) {
      ingredients = retrieveIngredients(state.ingredients, product)
    }
  }
  return { product, ingredients }
};


export default connect(mapStateToProps)(ProductShow);  