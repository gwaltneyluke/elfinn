import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainMenu from './MainMenu';
import CreateExchange from './CreateExchange';
import JoinExchange from './JoinExchange';

function App() {
  return (
    <div className="App">
      <h1>Welcome to ElFinn</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainMenu /> }/>
          <Route path='/create-exchange' element={ <CreateExchange /> }/>
          <Route path='/join-exchange' element={ <JoinExchange /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
