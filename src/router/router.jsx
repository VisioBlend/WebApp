import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Services2 from "../pages/Services2.jsx";
import Portfolio from "../pages/portfolio.jsx";
import LoginForm from "../pages/login.jsx";
import SignupForm from "../pages/signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services2",
        element: <Services2 />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
