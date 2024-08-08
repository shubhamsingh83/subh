// src/pages/App.jsx
import React from 'react';
import Spreadsheet from '../components/Spreadsheet';
import Toolbar from '../components/Toolbar';
import SearchFilter from '../components/SearchFilter';

const App = () => {
  return (
    <div className="p-8">
      <Toolbar />
      <SearchFilter />
      <Spreadsheet />
    </div>
  );
};

export default App;
