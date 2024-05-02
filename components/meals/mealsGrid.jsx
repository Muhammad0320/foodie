import classes from "./mealsGrid.module.css";
import MealItem from "./mealsItem";

function MealsGrid({ meals }) {
  return (
    <div className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </div>
  );
}

export default MealsGrid;
