import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, SignUpPage, LoginPage, TodoListPage } from "./pages";
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
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
