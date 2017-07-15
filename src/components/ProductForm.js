import React, {Component} from 'react';  
import PropTypes from 'prop-types'; 
import TextField from './TextField';  
import TextArea from './TextArea';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  content: {
    width: '69%',
    height: '100%',
    float: 'right',
    position: 'relative'
  },
})

class ProductForm extends Component {  
  render() {
    return (
      <div className={css(sheet.content)}>
        <h2>New Product</h2>
        <form>
          <TextField
            name="name"
            label="Name"
            value={this.props.product.name}
            onChange={this.props.onChange}/>
          <br />
          <TextField
            name="brand"
            label="Brand"
            value={this.props.product.brand}
            onChange={this.props.onChange}/>
          <br />
          <h3>Ingredients</h3>
          Please separate ingredients with commas.
          <TextArea
            name="ings"
            value={this.props.product.ings}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            onClick={this.props.onSubmit}/>
        </form>
      </div>
  );
  }
}

ProductForm.propTypes = {  
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ProductForm;  