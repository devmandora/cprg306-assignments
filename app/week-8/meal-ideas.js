// week-8/meal-ideas.js
"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  // Load function to update meals based on the selected ingredient
  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  };

  // Use effect to load meal ideas whenever the ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for "{ingredient}"</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
