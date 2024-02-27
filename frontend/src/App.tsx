import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/fleet/:id",
      element: <Fleet />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
