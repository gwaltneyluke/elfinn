import './App.css';
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainMenu from './pages/MainMenu';
import CreateExchange from './pages/CreateExchange';
import JoinExchange from './pages/JoinExchange';
import UpdateExchange from './pages/UpdateExchange';
import { initialAppState, reducer } from './state/appState';

function App() {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  console.log(`re-rendering app: ${JSON.stringify(state)}`);

  const addExchange = (exchange) => { dispatch({ type: 'ADD EXCHANGE', exchange }) }
  const editExchange = (exchange, idx) => { dispatch({ type: 'EDIT EXCHANGE', exchange, idx }) };

  return (
    <div className="App">
      <h1>Welcome to ElFinn</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainMenu listExchanges={state.userExchanges} /> }/>
          <Route path='/create-exchange' element={ <CreateExchange addExchange={addExchange} /> }/>
          <Route path='/update-exchange/:exchangeId' element={ <UpdateExchange editExchange={editExchange} exchanges={state.userExchanges} /> } />
          <Route path='/join-exchange' element={ <JoinExchange /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
