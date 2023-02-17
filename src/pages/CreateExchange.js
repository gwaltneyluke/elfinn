import { useReducer } from 'react';
import { Link } from 'react-router-dom';

import ExchangeForm from '../components/ExchangeForm';
import { initialExchangeState, reducer } from '../state/createExchangeState';

function CreateExchange({ addExchange }) {
  const [exchangeState, dispatch] = useReducer(reducer, initialExchangeState);

  return (
    <div>
      <h2>Create Gift Exchange</h2>

      <ExchangeForm exchangeState={exchangeState} dispatch={dispatch} />

      <Link to='/' onClick={() => addExchange(exchangeState)}>
        <button type='button'>Create Exchange!</button>
      </Link>

      <Link to='/'>
        <button type='button'>Cancel</button>
      </Link>
    </div>
  );
}

export default CreateExchange;