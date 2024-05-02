import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <p>NextLevel foods for NextLevel Foodies</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community"> Join out community </Link>
            <Link href="/meals"> Explore meal </Link>
          </div>
        </div>
      </header>

      <main></main>
    </>
  );
}
