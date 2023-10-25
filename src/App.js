import React from 'react';
import RandomizePage from './RandomizePage'; // Adjust the import path as needed
import ManageHorsesPage from './ManageHorsesPage';
import ManageRidersPage from './ManageRidersPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <><><><div className="App">
      <RandomizePage />
    </div>
      <div className="App">
        <ManageHorsesPage />
      </div></><div className="App">
        <ManageRidersPage />
      </div></><div className="App">
        <NavBar />
      </div></>
  );
}

export default App;
