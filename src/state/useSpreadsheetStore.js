// src/state/useSpreadsheetStore.js
import create from 'zustand';
import { createGrid } from '../utils/helpers';

export const useSpreadsheetStore = create((set) => ({
  grid: createGrid(20, 50), // Initialize with a grid of 20 rows and 50 columns
  updateCell: (row, col, value) => set((state) => {
    const newGrid = [...state.grid];
    newGrid[row][col] = value;
    return { grid: newGrid };
  }),
  undo: () => {},
  redo: () => {},
  searchGrid: (query) => {
    const results = [];
    // Implement search logic
    return results;
  },
}));
