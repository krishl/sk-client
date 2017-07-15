import React, { Component } from 'react';
import IngredientsList from './IngredientsList';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  content: {
    width: 'auto',
    padding: '5px',
    height: '100%',
    float: 'right',
    overflowY: 'auto',
    position: 'relative'
  }
})

export default class IndividualProduct extends Component {  
  render() {
    return (
      <div className={css(sheet.product)}>
        <h2>{this.props.product.name}</h2>
        Brand: {this.props.product.brand}
        <IngredientsList ingredients={this.props.product.ingredients} /> 
      </div>
    );
  }
};