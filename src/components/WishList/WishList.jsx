import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getWishList } from "../utilities/wishtList";
import Book from "../Book.jsx/Book";

const WishList = () => {
  const books = useLoaderData();
  const [totalBooks, setTotalBooks] = useState([]);
  // console.log(totalBooks);
  useEffect(() => {
    const wishBooksL = getWishList();
    const wishBooks = books.filter((b) => wishBooksL.includes(b.bookId));
    setTotalBooks(wishBooks);
  }, []);

  return (
    <div className="mt-5">
      {totalBooks.map((b) => (
        <Book key={b.bookId} book={b}></Book>
      ))}
    </div>
  );
};

export default WishList;
