import React, { Component } from 'react';
import './App.css';
import CalculatorContainer from './containers/CalculatorContainer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

const appReducer = combineReducers(reducers);

function rootReducer(state, action) {
  return appReducer(state, action);
}

const store = createStore(
  rootReducer,
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
