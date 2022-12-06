import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { IuserDate } from "../../interfaces";
import { userAuthActions } from "../../store/userAuth";
import "./index.css";

const initUserData = { username: "root", password: "123456", remember: true };

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = userAuthActions;
  const [userData, setUserDate] = useState<IuserDate>(initUserData);

  const onFinish = (): void => {
    dispatch(login(userData));
    navigate("/list");
  };

  return (
    <div id="login-page">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish();
        }}
      >
        <h1>LOGIN</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter your username here"
          onChange={(e) =>
            setUserDate({ ...userData, username: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password here"
          onChange={(e) =>
            setUserDate({ ...userData, password: e.target.value })
          }
        />
        <div>
          <input
            type="checkbox"
            name="checked"
            defaultChecked={userData.remember}
            onClick={() =>
              setUserDate({ ...userData, remember: !userData.remember })
            }
          />
          <label>remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
