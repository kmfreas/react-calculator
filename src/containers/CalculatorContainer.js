import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Calculator from '../components/Calculator';
import calculatorKeys from '../utils/calculatorKeys';
import { clearCalculations, handleAddOperand, handleAddNumber, handleCalculation } from '../redux';

class CalculatorContainer extends Component {
  static lastKey = null;

  static propTypes = {
    calculations: PropTypes.array.isRequired,
  }

  handleClick = (key) => {
    switch(key) {
      case 'AC':
        this.props.dispatch(clearCalculations());
        break;
      case '=':
        this.props.dispatch(handleCalculation());
        break;
      case '+':
      case '-':
        this.props.dispatch(handleAddOperand(key));
        break;
      default:
        // reset calculations if a number is clicked and the last key was the equals sign
        if (this.lastKey === '=') {
          this.props.dispatch(clearCalculations());
        }
        this.props.dispatch(handleAddNumber(key));
      }

      this.lastKey = key;
    }

  render() {
    return (
      <Calculator 
        calculatorKeys={calculatorKeys} 
        displayString={this.props.calculations.join(' ')}
        handler={this.handleClick}
      />
    );
  }
}

function mapStateToProps(calculations) {
  return {
    calculations,
  };
}

export default connect(mapStateToProps)(CalculatorContainer);
