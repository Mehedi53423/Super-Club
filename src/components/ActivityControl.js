import React from "react";
import profilePic from "../utilities/profile.jpg";

const ActivityControl = () => {
  return (
    <div className="border h-screen sticky top-0 bg-white shadow-lg">
      <div className="flex p-5">
        <img src={profilePic} alt="Profile" className="h-20 rounded-full" />
        <div className="pl-5 pt-5">
          <h1 className="text-xl font-bold">Md. Mehedi Hasan</h1>
          <h1 className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Narayanganj, Bangladesh
          </h1>
        </div>
      </div>
      <div className="flex mx-5 px-10 py-5 justify-between bg-slate-200 rounded-xl text-center">
        <div>
          <h1>
            <span className="text-2xl font-bold">80</span>kg
          </h1>
          <h1 className="text-xl">Weight</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">5.6</h1>
          <h1 className="text-xl">Height</h1>
        </div>
        <div>
          <h1>
            <span className="text-2xl font-bold">27</span>yrs
          </h1>
          <h1 className="text-xl">Age</h1>
        </div>
      </div>
      <div className="mx-5 mt-5">
        <h1 className="text-xl font-bold mb-5">Add A Break</h1>
        <div className="flex py-5 px-10 justify-between bg-slate-200 rounded-xl text-center text-lg font-semibold">
          <div className="p-3 bg-white rounded-full">
            <h1>10s</h1>
          </div>
          <div className="p-3 bg-white rounded-full">
            <h1>20s</h1>
          </div>
          <div className="p-3 bg-white rounded-full">
            <h1>30s</h1>
          </div>
          <div className="p-3 bg-white rounded-full">
            <h1>40s</h1>
          </div>
          <div className="p-3 bg-white rounded-full">
            <h1>50s</h1>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5">
        <h1 className="text-xl font-bold mb-5">Exercise Details</h1>
        <div className="flex justify-between text-lg font-semibold mb-5 p-5 bg-slate-200 rounded-xl">
          <h1>Exercise Time</h1>
          <h1>seconds</h1>
        </div>
        <div className="flex justify-between text-lg font-semibold mb-5 p-5 bg-slate-200 rounded-xl">
          <h1>Break Time</h1>
          <h1>seconds</h1>
        </div>
      </div>
      <div className="text-center">
        <button className="Activity Completed text-lg text-white font-semibold bg-indigo-500 py-2 w-11/12 rounded-xl">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default ActivityControl;
