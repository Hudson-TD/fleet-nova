import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fleet/:id",
      element: <Fleet />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
