import React from "react";

const Cards = (props) => {
  const { img, name, about, forAge, timeRequerd } = props.activity;
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img class="rounded-t-lg" src={img} alt="" />
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left">
            {name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-left">{about}</p>
          <p class="mb-3 font-normal text-gray-700 text-left">{forAge}</p>
          <p class="mb-3 font-normal text-gray-700 text-left">{timeRequerd}</p>
          <button className="text-xl font-bold py-2 w-1/2 bg-indigo-500 rounded-xl">
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
