import Image from "next/image";
import classes from "./page.module.css";

function MealDetails() {
  return (
    <>
      <header className={classes.header}>
        <Image fill />

        <div className={classes.headerText}>
          <h1>Title</h1>

          <p className={classes.creator}>
            by <a href="meailto:name">Name</a>
          </p>

          <p className={classes.summary}>Summary</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
}

export default MealDetails;
