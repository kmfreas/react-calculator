const CLEAR_CALC = 'CLEAR_CALC';
const ADD_OPERAND = 'ADD_OPERAND';
const ADD_NUM = 'ADD_NUM';
const CALCULATE = 'CALCULATE';

export function clearCalculations() {
  return {
    type: CLEAR_CALC,
  };
}

function addOperand(calc) {
  return {
    type: ADD_OPERAND,
    calc,
  };
}

function addNumber(num, slice_length) {
  return {
    type: ADD_NUM,
    num,
    slice_length
  };
}

function calculate(result) {
  return {
    type: CALCULATE,
    result,
  };
}

export function handleAddNumber(num) {
  return (dispatch, getState) => {
    const state = getState();
    const last = state[state.length - 1] || '';

    if (num === '.' && last.indexOf('.') >= 0) {
      return;
    }

    if (!state.length || (state[state.length - 1] !== '+' && state[state.length - 1] !== '-')) {
      dispatch(addNumber(last + num, state.length - 1));
    } else {
      dispatch(addNumber(num, state.length));
    }
  };
}

export function handleAddOperand(operand) {
  return (dispatch, getState) => {
    const state = getState();
    
    if (state.length && state[state.length - 1] !== '+' && state[state.length - 1] !== '-') {
      dispatch(addOperand(operand));
    }
  };
}

export function handleCalculation() {
  return (dispatch, getState) => {
    const state = getState();
    
    if (state.length) {
      const result = state.reduce((total, element, i) => {
        if (i > 0 && i % 2 === 0) {
          if (state[i - 1] === '-') {
            return total - parseFloat(element);
          }
          return total + parseFloat(element);
        }
        return total;
      }, parseFloat(state[0]));
      dispatch(calculate(result));
    }
  };
}

export default function calculations(state = [], action) {
  switch (action.type) {
    case CLEAR_CALC:
      return [];
    case ADD_OPERAND:
      return [
        ...state,
        ...action.calc,
      ];
    case ADD_NUM:
      return [
        ...state.slice(0, action.slice_length),
        action.num,
      ];
    case CALCULATE:
      return [
        action.result,
      ];
    default:
      return state;
  }
}
