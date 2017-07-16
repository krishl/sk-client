import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, product } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    handleCheckboxChange(product);
  }

  render() {
    const { isChecked } = this.state;

    return (
      <input
        type="checkbox"
        value={this.props.product.name}
        checked={isChecked}
        onChange={this.toggleCheckboxChange}
      />
    );
  }
}

Checkbox.propTypes = {
  product: PropTypes.object.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;