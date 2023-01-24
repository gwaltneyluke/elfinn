import './App.css';
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainMenu from './MainMenu';
import CreateExchange from './CreateExchange';
import JoinExchange from './JoinExchange';
import { initialAppState, reducer } from './state/appState';

function App() {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  console.log(`re-rendering app: ${JSON.stringify(state)}`);

  const addExchange = (exchange) => { dispatch({ type: 'ADD USER EXCHANGE', newUserExchange: exchange }) }

  return (
    <div className="App">
      <h1>Welcome to ElFinn</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainMenu listExchanges={state.userExchanges} /> }/>
          <Route path='/create-exchange' element={ <CreateExchange addExchange={addExchange} /> }/>
          <Route path='/join-exchange' element={ <JoinExchange /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
