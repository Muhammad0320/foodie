import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

function MealDetails({ params }) {
  const meal = getMeal(params.mealSlug);

  return (
    <>
      <header className={classes.header}>
        <Image
          className={classes.image}
          src={meal.image}
          fill
          alt={meal.title}
        />

        <div className={classes.headerText}>
          <h1> {meal.title} </h1>

          <p className={classes.creator}>
            by <a href="meailto:name"> {meal.creator} </a>
          </p>

          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetails;
