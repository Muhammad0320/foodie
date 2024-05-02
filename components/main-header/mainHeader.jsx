import Link from "next/link";
import classes from "./mainHeader.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="A plate w/ food init" priority />
        NextLevel foods
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/community"> Meals community </Link>
          </li>
          <li>
            <Link href="meals"> Browse Meals </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
