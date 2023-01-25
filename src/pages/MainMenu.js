import { Link } from 'react-router-dom';

import ListExchanges from '../components/ListExchanges';

function MainMenu({ listExchanges }) {
  return (
    <div className="MainMenu">
      <h2>Main Menu</h2>
      <ListExchanges 
        ongoingExchanges={listExchanges}
      />
      <Link to='/create-exchange'>
        <button>Create Exchange</button>
      </Link>
      <Link to='/join-exchange'>
        <button>Join Exchange</button>
      </Link>
    </div>
  );
}

export default MainMenu;