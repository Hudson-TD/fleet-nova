import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Add from "./pages/Add";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/fleet/assets",
      element: <Fleet />,
    },
    {
      path: "/fleet/add",
      element: <Add />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
