import { FC } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, SignUpPage, LoginPage, TodoListPage } from "./pages";
import store from "./store";
import "./App.css";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/list",
      element: <TodoListPage />,
    },
    {
      path: "*",
      element: <div>hello from not found page</div>,
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
