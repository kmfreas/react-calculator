import React from 'react';
import PropTypes from 'prop-types';

const calculator = (props) => {
  return (
    <div className="calculator">
      <div className="calculator__display">

      </div>
    </div>
  )
};

calculator.propTypes = {
  displayString: PropTypes.string.isRequired,
};



export default calculator;
