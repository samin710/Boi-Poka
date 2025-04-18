import React from "react";
import Book from "../Book.jsx/Book";

const Books = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-center">Books</h1>
      <div className="grid grid-cols-3 gap-8 pt-9 ">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
