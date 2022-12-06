import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../../components";
import { IuserDate } from "../../interfaces";
import { userAuthActions } from "../../store/userAuth";
import "./index.css";

const initUserData = { username: "root", password: "123456", remember: true };

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const { login } = userAuthActions;
  const [userData, setUserDate] = useState<IuserDate>(initUserData);

  const onFinish = (): void => {
    dispatch(login(userData));
  };

  return (
    <>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish();
        }}
      >
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
          placeholder="Enter your username here"
          onChange={(e) =>
            setUserDate({ ...userData, password: e.target.value })
          }
        />
        <input
          type="checkbox"
          name="checked"
          defaultChecked={userData.remember}
          onClick={() =>
            setUserDate({ ...userData, remember: !userData.remember })
          }
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
