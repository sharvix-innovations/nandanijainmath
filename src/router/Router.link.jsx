import allRoutes from "./all_routes";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";

export const publicRoutes= [
{
    id: "1",
    name: "Home",
    link: allRoutes.home,
    element: <Home />,
  },
  {
    id: "2",
    name: "About",
    link: allRoutes.about,
    element: <About />,
  },
  {
    id: "3",
    name: "Contact",
    link: allRoutes.contact,
    element: <Contact />,
  },
  {
    id: "4",
    name: "Gallery",
    link: allRoutes.gallery,
    element: <Gallery />,
  },


]