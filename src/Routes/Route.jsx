import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import Language from "../pages/Language/Language";
import EasyTranslationDetails from "../pages/EasyTranslationDetails/EasyTranslationDetails";
import FAQ from "../pages/FAQ/FAQ";
import FooterDetails from "../pages/FooterDetails/FooterDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "language",
        element: <Language />,
      },
      {
        path: "easyTranslation",
        element: <EasyTranslationDetails />,
      },
      {
        path: "FAQ",
        element: <FAQ />
      },
      {
        path: "/footerDetails/:section",
        element: <FooterDetails />
      }
    ],
  },
]);
