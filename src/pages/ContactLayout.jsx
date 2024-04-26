import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h2>This page has a different Layout and no NavBar!</h2>
      <p>
        But you can go back to <Link to="/">Home</Link>
      </p>
      <Outlet />
      <p>Footer</p>
    </>
  );
}
