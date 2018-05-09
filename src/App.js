import React, { Component } from 'react';
import './App.css';
import CalculatorContainer from './containers/CalculatorContainer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import calculations from './redux';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
  calculations,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(thunk),
  ),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <CalculatorContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
