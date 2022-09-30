import React from "react";

const Cards = (props) => {
  const { img, name, about, forAge, timeRequerd } = props.activity;
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow-lg">
        <img className="rounded-t-lg h-60 w-80" src={img} alt="" />
        <div className="p-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-left">{about}</p>
          <p className="mb-3 font-normal text-gray-700 text-left">{forAge}</p>
          <p className="mb-3 font-normal text-gray-700 text-left">
            {timeRequerd}
          </p>
          <button className="text-xl font-bold py-2 w-1/2 bg-indigo-500 rounded-xl">
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
