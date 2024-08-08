// src/utils/helpers.js

export const createGrid = (rows, columns, defaultValue = '') => {
    return Array.from({ length: rows }, () => Array(columns).fill(defaultValue));
  };
  
  export const formatCellValue = (value, format) => {
    switch (format) {
      case 'number':
        return !isNaN(value) ? Number(value).toLocaleString() : value;
      case 'left':
        return `<div style="text-align: left;">${value}</div>`;
      case 'center':
        return `<div style="text-align: center;">${value}</div>`;
      case 'right':
        return `<div style="text-align: right;">${value}</div>`;
      default:
        return value;
    }
  };
  
  export const validateValue = (value, rule) => {
    switch (rule) {
      case 'numeric':
        return !isNaN(value);
      case 'required':
        return value.trim() !== '';
      default:
        return true;
    }
  };
  
  export const searchGrid = (grid, query) => {
    const results = [];
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.toString().toLowerCase().includes(query.toLowerCase())) {
          results.push({ rowIndex, colIndex });
        }
      });
    });
    return results;
  };
  
  export const paginateGrid = (grid, currentPage, rowsPerPage) => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return grid.slice(start, end);
  };
  