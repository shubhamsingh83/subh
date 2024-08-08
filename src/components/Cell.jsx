// src/components/Cell.jsx
import React, { useState } from 'react';
import { useSpreadsheetStore } from '../state/useSpreadsheetStore';

const Cell = ({ rowIndex, colIndex }) => {
  const { grid, updateCell } = useSpreadsheetStore();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(grid[rowIndex][colIndex]);

  const handleDoubleClick = () => setEditing(true);

  const handleChange = (e) => setValue(e.target.value);

  const handleBlur = () => {
    setEditing(false);
    updateCell(rowIndex, colIndex, value);
  };

  return (
    <td
      className="border px-2 py-1"
      onDoubleClick={handleDoubleClick}
    >
      {editing ? (
        <input
          className="w-full"
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        value
      )}
    </td>
  );
};

export default Cell;
