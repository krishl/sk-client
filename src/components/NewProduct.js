import React, {Component} from 'react'; 
import PropTypes from 'prop-types' 
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import update from 'immutability-helper' 
import * as productActions from '../actions/productActions';  
import ProductForm from './ProductForm';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '', 
        brand: '',
        ings: ''
      },
      show: false
    }
  }

  updateProductState = (event) => {
    this.setState({
      product: update(this.state.product, {
      [event.target.name]: {$set: event.target.value},
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createProduct(this.state.product, this.props.history)
  }

  render() {
    return (
      <div>
        <ProductForm 
          product={this.state.product} 
          onChange={this.updateProductState}
          onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

NewProduct.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewProduct);  