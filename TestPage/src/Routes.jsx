import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Layout from "../src/components/Layout";
import Gofuelprogram from "./pages/gofuelprogram";
import Notfound from "./pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
        <Layout>
      <Contact />
        </Layout>
    ),
  },
  {
    path: "/about",

    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/gofuel",

    element: (
      <Layout>
        <Gofuelprogram />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
