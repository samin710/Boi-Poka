import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);
  const { bookId, bookName, image, rating, tags, totalPages, author } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card  shadow-sm bg-amber-50 ">
        <figure className=" bg-slate-200 py-8">
          <img className="h-[160px] w-30" src={image} alt="Shoes" />
        </figure>
        <div className="flex px-6 pt-5  w-60 justify-between">
          {tags.map((tag, index) => (
            <p key={index} className="border border-green-500 rounded-sm px-1">
              {tag}
            </p>
          ))}
        </div>
        <div className="card-body border-b-1 border-dashed">
          <h2 className="card-title justify-between">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>By: {author}</p>
        </div>
        <div className="flex justify-between p-5">
          <p>Fiction</p>
          <p className="flex items-center gap-2">
            {rating} <FaStarHalfAlt />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
