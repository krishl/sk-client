import React, { Component } from 'react';
import IngredientsList from './IngredientsList';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  products: {
    width: 'auto',
    padding: '5px',
    height: '100%',
    overflowY: 'auto',
    position: 'center'
  },
  compare: {
    width: 'auto',
    padding: '8px',
    height: 'auto',
    borderStyle: 'dashed',
    borderWidth: '1px',
    borderColor: '#ddd',
    position: 'relative',
    alignContent: 'flex-start'
  }
})

const productsStyle = css(sheet.products)
const compareStyle = css(sheet.compare)

export default class IndividualProduct extends Component {  
  render() {
    return (
      <div className={this.props.match.url === "/compare" ? compareStyle : productsStyle}>
        <h2>{this.props.product.name}</h2>
        Brand: {this.props.product.brand}
        <IngredientsList ingredients={this.props.product.ingredients} /> 
        <br />
      </div>
    );
  }
};