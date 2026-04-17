import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Solutions } from "./components/Solutions";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { BrandAssets } from "./components/BrandAssets";
import { BookDemo } from "./components/BookDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "process", Component: Process },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "brand", Component: BrandAssets },
      { path: "book-demo", Component: BookDemo },
    ],
  },
]);
