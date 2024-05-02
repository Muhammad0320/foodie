import Link from "next/link";
import classes from "./page.module.css";

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious meals created,{" "}
          <span className={classes.highlight}> by you </span>{" "}
        </h1>
        <p>Choose your favorite recipe, its easy and fun!</p>
        <p className={classes.cts}>
          <Link href="/meals/share"> share your favorite recipe </Link>
        </p>
      </header>

      <main></main>
    </>
  );
}

export default Meals;
