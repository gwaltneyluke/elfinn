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

      <button type='button' onClick={() => addExchange(exchangeState)}>Create Exchange!</button>

      <Link to='/'>
        <button type='button'>Main Menu</button>
      </Link>
    </div>
  );
}

export default CreateExchange;