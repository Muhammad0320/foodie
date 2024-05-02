import Link from "next/link";
import classes from "./mainHeader.module.css";
import logo from "@/assets/logo.png";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logo.src} alt="A plate w/ food init" />
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/community"> Meals community </Link>
          </li>
          <li>
            <Link href="meals/share"> share meal </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
