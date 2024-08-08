// src/components/Row.jsx
import React from 'react';
import Cell from './Cell';

const Row = ({ rowIndex, columns }) => {
  return (
    <tr>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <Cell key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
      ))}
    </tr>
  );
};

export default Row;
