import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Pricing from "../pages/Pricing/Pricing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/service',
                element: <Service />
            },
            {
                path: '/pricing',
                element: <Pricing />
            }
        ]
    }
]);