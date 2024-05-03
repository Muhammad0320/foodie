import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function GetMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function Meals() {
  ///

  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious meals created,{" "}
          <span className={classes.highlight}> by you </span>{" "}
        </h1>
        <p>Choose your favorite recipe, its easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share"> share your favorite recipe </Link>
        </p>
      </header>

      <main>
        <Suspense fallback={<p> Fetching meals </p>}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
