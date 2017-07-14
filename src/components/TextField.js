import React from 'react';  
import PropTypes from 'prop-types'; 

const TextField = ({name, label, placeholder, value, onChange}) => {  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

TextField.propTypes = {  
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextField;