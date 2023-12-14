// MealSuggestions.js
import React from 'react';

const MealSuggestions = ({ suggestions }) => {
  return (
    <div className="items-center justify-center h-screen mb-[100px]">
      <div className=" ml-[300px]  justify-center align-center bg-white p-10 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Meal Suggestions</h2><br/>
        {suggestions.length > 0 ? (
          <ul>
            {suggestions.map((meal) => (
              <li key={meal.id} className="mb-4">
                <h3 className="text-xl font-semibold">{meal.title}</h3>
                <p>Recipe ID: {meal.id}</p>
                <p>
                  Ingredients: {meal.usedIngredients ? meal.usedIngredients.map(ingredient => ingredient.originalString).join(', ') : 'N/A'}
                </p>
                {/* Add more details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recipes found. Please adjust your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default MealSuggestions;
