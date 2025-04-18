import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Header from "../components/Header/Header";
import Root from "../components/Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, loader: () => fetch("booksData.json"), Component: Home },
      {
        path: "about",
        Component: About,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
