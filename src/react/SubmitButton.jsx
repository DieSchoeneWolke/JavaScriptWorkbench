import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const AlertButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

const container = document.getElementById('react-container');
ReactDOM.render(<AlertButton />, container);