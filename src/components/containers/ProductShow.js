import React, { Component } from 'react';  
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {StyleSheet, css} from 'aphrodite-jss';
import IndividualProduct from '../IndividualProduct';

const sheet = StyleSheet.create({
  content: {
    width: '69%',
    height: '100%',
    float: 'right',
    overflowY: 'auto',
    position: 'relative'
  }
})

class ProductShow extends Component {  
  render() {
    return (
      <div className={css(sheet.content)}>
        < IndividualProduct product={this.props.product} />
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