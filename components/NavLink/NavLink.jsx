"use client";
import classes from "./NavLink.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

function NavLink({ children, to }) {
  const params = useParams();

  return (
    <Link
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
