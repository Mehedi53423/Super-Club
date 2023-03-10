import React from "react";

const Cards = (props) => {
  const { handleClick } = props;
  const { img, name, about, forAge, timeRequerd } = props.activity;

  return (
    <div>
      <div className="md:max-w-sm bg-white rounded-lg shadow-lg">
        <img className="rounded-t-lg h-60 w-full" src={img} alt="" />
        <div className="p-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-justify">{about}</p>
          <p className="mb-3 font-normal text-gray-700 text-left">
            <span className="font-semibold">For Age :</span> {forAge}
          </p>
          <p className="mb-3 font-normal text-gray-700 text-left">
            <span className="font-semibold">Time Requerd :</span> {timeRequerd}
          </p>
          <button
            className="text-xl text-white font-bold py-2 w-5/6 bg-indigo-500 rounded-xl hover:bg-indigo-600"
            onClick={() => handleClick(timeRequerd)}
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
