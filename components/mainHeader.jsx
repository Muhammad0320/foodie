import Link from "next/link";

import logo from "@/assets/logo.png";

function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} alt="A plate w/ food init" />
      </Link>

      <nav>
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
