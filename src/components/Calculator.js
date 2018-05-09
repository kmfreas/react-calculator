import React from 'react';
import PropTypes from 'prop-types';

const calculator = (props) => {
  return (
    <div className="calculator">
      <div className="calculator__display">
        { props.displayString || 0 }
      </div>
      <div className="calculator__body">
        {
          props.calculatorKeys.map((key) => {
            return (
              <div className="calculator__key" key={key} onClick={() => props.handler(key)}>
                {key}
              </div>
            );
          })
        }      
      </div>
    </div>
  )
};

calculator.propTypes = {
  displayString: PropTypes.string.isRequired,
  calculatorKeys: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired,
};

export default calculator;
