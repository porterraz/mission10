import React from 'react';
import './App.css';
import Heading from './Heading';
import BowlerTable from './BowlerTable';

// The main App component combining the Heading and Table [cite: 3515]
function App() {
  return (
    <div className="App">
      <Heading />
      <BowlerTable />
    </div>
  );
}

export default App;