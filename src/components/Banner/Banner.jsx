import React from "react";
import BookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-24 my-10 px-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-18">
        <img src={BookImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
