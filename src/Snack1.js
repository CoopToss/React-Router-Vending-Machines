import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div>
      <h1>Snack 1</h1>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;