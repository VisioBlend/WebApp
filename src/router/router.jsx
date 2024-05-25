import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Services2 from "../pages/Services2.jsx";
import Portfolio from "../pages/portfolio.jsx";
import LoginForm from "../pages/login.jsx";
import SignupForm from "../pages/signup.jsx";
import Services3 from "../pages/Services3.jsx";
import Services4 from "../pages/Services4.jsx";
import Services5 from "../pages/Services5.jsx";

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
        path: "/services3",
        element: <Services3 />,
      },
      {
        path: "/services4",
        element: <Services4 />,
      },
      {
        path: "/services5",
        element: <Services5 />,
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
