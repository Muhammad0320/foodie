import Link from "next/link";
import classes from "./mainHeader.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "../NavLink/NavLink";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="A plate w/ food init" priority />
          NextLevel foods
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/community"> Meals community </NavLink>
            </li>
            <li>
              <NavLink to="/meals"> Browse Meals </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
