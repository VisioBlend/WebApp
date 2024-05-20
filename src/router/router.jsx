import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Portfolio from "../pages/portfolio.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            }
        ]
    }
])

export default router