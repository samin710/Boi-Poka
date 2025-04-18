import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  //   console.log(typeof convertedId);
  const data = useLoaderData();
  const bookd = data.find((b) => b.bookId === convertedId);
  //   console.log(bookd);
  const { bookId, bookName, image, rating, tags, totalPages, author, review } =
    bookd;
  return (
    <div className="card w-96 shadow-lg mt-10 bg-amber-200">
      <figure className="px-10 pt-10">
        <img className="h-[260px] w-50 rounded-xl" src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookName}</h2>
        <p>{review}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Read</button>
          <button className="btn btn-primary">Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
