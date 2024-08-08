// src/components/Spreadsheet.jsx
import React, { useState, useEffect } from 'react';
import Row from './Row';

const Spreadsheet = () => {
  const [visibleRows, setVisibleRows] = useState(20);
  const columns = 50; // Number of columns in the spreadsheet

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setVisibleRows((prev) => prev + 10); // Load more rows on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto w-full">
        <tbody>
          {Array.from({ length: visibleRows }).map((_, rowIndex) => (
            <Row key={rowIndex} rowIndex={rowIndex} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
