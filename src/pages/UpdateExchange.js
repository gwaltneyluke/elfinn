import { useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import ExchangeForm from '../components/ExchangeForm';

import { reducer } from '../state/createExchangeState';

function UpdateExchange({ editExchange, exchanges }) {
  const { exchangeId } = useParams();
  const exchangeIndex = exchanges.findIndex(curr => curr.id === exchangeId);
  const exchange = exchanges[exchangeIndex];
  const [exchangeState, dispatch] = useReducer(reducer, exchange);

  return (
    <div>
      <h2>Update Gift Exchange</h2>

      <ExchangeForm exchangeState={exchangeState} dispatch={dispatch} />

      <button type='button' onClick={() => editExchange(exchangeState, exchangeIndex)}>Update Exchange</button>

      <Link to='/'>
        <button type='button'>Main Menu</button>
      </Link>
    </div>
  );
}

export default UpdateExchange;