import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function JoinExchangeSelector({ exchanges }) {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [exchangeNotFound, setExchangeNotFound] = useState(false);

  const changeName = (e) => setName(e.target.value);
  const joinExchange = () => {
    const exchange = exchanges.find(e => e.exchangeName === name);
    if (exchange) {
      console.log('navigating to join exchange page');
      navigate(`/join-exchange/${exchange.id}`)
    } else {
      setExchangeNotFound(true);
    }
  }

  return (
    <div>
      <h2>Join Exchange</h2>

      <div>
        <span>
          <label>Exchange Name</label>
          <input type='text' id='exchange-name' onChange={changeName}/>
        </span>
      </div>

      <div>
        <label hidden={!exchangeNotFound} color='red'>Exchange not found!</label>
      </div>

      <div>
        <button type='button' onClick={joinExchange}>Join Exchange</button>
      </div>

      <Link to='/'>
        <button>Main Menu</button>
      </Link>
    </div>
  )
}

export default JoinExchangeSelector;