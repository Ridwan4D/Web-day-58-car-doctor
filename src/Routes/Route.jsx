import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import CheckOut from "../pages/CheckOut";
import Bookings from "../pages/Bookings";
import SecureRoute from "./SecureRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        element: (
          <SecureRoute>
            <CheckOut />
          </SecureRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <SecureRoute>
            <Bookings />
          </SecureRoute>
        ),
      },
    ],
  },
]);

export default router;
