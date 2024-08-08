// src/components/Toolbar.jsx
import React from 'react';
import { useSpreadsheetStore } from '../state/useSpreadsheetStore';

const Toolbar = () => {
  const { undo, redo } = useSpreadsheetStore();

  return (
    <div className="flex space-x-2 mb-4">
      <button className="bg-gray-200 p-2 rounded" onClick={undo}>Undo</button>
      <button className="bg-gray-200 p-2 rounded" onClick={redo}>Redo</button>
    </div>
  );
};

export default Toolbar;
