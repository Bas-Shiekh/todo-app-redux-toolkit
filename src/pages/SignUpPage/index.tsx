import { FC } from "react";
import { Header } from "../../components";
import "./index.css";

const SignUpPage: FC = () => {
  return (
    <div id="signup-page">
      <Header />
      <form>
        <h1>SIGNUP</h1>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name here"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name here"
          />
        </div>
        <input
          type="text"
          name="username"
          placeholder="Enter your username here"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password here"
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Enter your confirm password here"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUpPage;
