import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as counterActions from './actions';

const option = [
  {
    value: 'text1',
    label: 'text1'
  },
  {
    value: 'text2',
    label: 'text2'
  },
  {
    value: 'text3',
    label: 'text3'
  }
];
function App(props) {
  const { CounterActions, number } = props;
  const renderOption = () => {
    return option.map((a,index) => {
      return <option value={a.label} key={index}>{a.value}</option>;
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={() => CounterActions.increment()}>
        +
      </button>
      <button type="button" onClick={() => CounterActions.decrement()}>
        -
      </button>
      <select>{renderOption()}</select>
    </div>
  );
}

App.propTypes = {
  // props.counterActions.increment: PropTypes.number.isRequired,
  // onTap: PropTypes.func.isRequired,
  CounterActions: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired
};

export default connect(
  (state) => ({
    number: state.counter
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(App);
// export default App
