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
        <h2>{this.props.product.name}</h2>
        Brand: {this.props.product.brand}
        <IngredientsList ingredients={this.props.ingredients} /> 
      </div>
    );
  }
};

ProductShow.propTypes = {  
  product: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let id = parseInt(ownProps.match.params.id, 10)
  let product = {};
  let ingredients = [];
  if (state.products.length > 0) {
    product = state.products.find(product => product.id === id)
    if (product.ingredients.length > 0) {
      ingredients = product.ingredients
    }
  }
  return { product, ingredients }
};


export default connect(mapStateToProps)(ProductShow);  