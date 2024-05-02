"use client";
import classes from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, to }) {
  const params = usePathname();

  return (
    <Link
      href={to}
      className={
        params.startsWith(to)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
