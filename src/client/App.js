import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('/api/meals');
      const meals = await response.json();
      setMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div>
          <h1>
            Meals:
          </h1>
          {meals.map((meal) => <div key={meal.title}>{meal.title}</div>)}
        </div>
      </Route>
    </Router>
  );
}

export default App;
