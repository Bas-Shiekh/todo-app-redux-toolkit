import { FC } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header: FC = () => {
  return (
    <header>
      <h1>Todo</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
  );
};

export default Header;
