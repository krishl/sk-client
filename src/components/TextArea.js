import React from 'react';  
import PropTypes from 'prop-types'; 

const TextArea = ({name, placeholder, value, onChange}) => {  
  return (
    <div>
        <textarea
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
    </div>
  );
};

TextArea.propTypes = {  
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;