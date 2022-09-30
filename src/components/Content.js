import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Content = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-xl font-bold my-2 py-2">Select Today's Activity</h1>
      <section className="flex">
        <div className="grid grid-cols-3 gap-4 pb-10">
          {activities.map((activity) => (
            <Cards key={activity.id} activity={activity}></Cards>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
