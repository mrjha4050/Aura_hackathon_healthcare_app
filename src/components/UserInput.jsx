import React, { useState } from 'react';

const UserInput = ({ onSearch }) => {
  const [calories, setCalories] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with user input
    onSearch(calories);
  };

  return (
    <div>
      <label>
        Calories:
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserInput;