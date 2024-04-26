import styles from "./RootLayout.module.css";
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav className={styles["navigation-container"]}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <p>Footer</p>
    </>
  );
}
