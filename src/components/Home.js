import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Link to="/calorie-calculator">Calorie Calculator</Link>
    </div>
  );
};

export default Home;