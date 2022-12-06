/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userAuthActions } from "../../store/userAuth";
import "./index.css";

const Header: FC = () => {
  const dispatch = useDispatch();
  const { userAuth, userData }: any = useSelector((state) => state);
  const { logout } = userAuthActions;

  return (
    <header>
      <h1>Todo</h1>
      <nav>
        {!userAuth.isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        ) : (
          <>
            <Link to="/list">My todo</Link>
            <Link to="/" onClick={() => dispatch(logout())}>
              logout
            </Link>
            <h4>{userData.username}</h4>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
