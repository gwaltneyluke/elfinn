import { Link } from 'react-router-dom';

function JoinExchange() {
  return (
    <div className='JoinExchange'>
      <h2>Join Exchange Form</h2>
      <Link to='/'>
        <button>Main Menu</button>
      </Link>
    </div>
  );
}

export default JoinExchange;