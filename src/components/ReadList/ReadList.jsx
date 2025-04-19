import React, { useEffect, useState } from "react";
import { getReadList } from "../utilities/readList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useLoaderData } from "react-router";
import Book from "../Book.jsx/Book";
import { getWishList } from "../utilities/wishtList";

const ReadList = () => {
  const totalReadBooks = useLoaderData();
  const [bx, setBx] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  // console.log(bx);
  useEffect(() => {
    const books = getReadList();
    // console.log(books);
    const match = totalReadBooks.filter((id) => books.includes(id.bookId));
    // console.log(match);
    setBx(match);
    const wishBooksL = getWishList();
    const wishBooks = totalReadBooks.filter((b) =>
      wishBooksL.includes(b.bookId)
    );
    setTotalBooks(wishBooks);
  }, []);
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortReadPages = [...bx].sort((a, b) => a.totalPages - b.totalPages);
      setBx(sortReadPages);
      const sortWishPages = [...totalBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setTotalBooks(sortWishPages);
    }
    if (type === "ratings") {
      const sortReadRat = [...bx].sort((a, b) => a.rating - b.rating);
      setBx(sortReadRat);
      const sortWishRat = [...totalBooks].sort((a, b) => a.rating - b.rating);
      setTotalBooks(sortWishRat);
    }
  };
  return (
    <div>
      <div className="ml-150 mt-10">
        <details className="dropdown ">
          <summary className="btn bg-green-400 m-1">Sort by {sort}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSort("pages")}>
              <a>Page numbers</a>
            </li>
            <li
              onClick={() => {
                handleSort("ratings");
              }}
            >
              <a>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>

          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h1>Total read books:{bx.length}</h1>
          {bx.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Total wishlist books: {totalBooks.length}</h2>
          {totalBooks.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
