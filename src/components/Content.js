import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Questions from "./Questions";

const Content = (props) => {
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-10">
          {activities.map((activity) => (
            <Cards
              key={activity.id}
              activity={activity}
              handleClick={props.handleClick}
            ></Cards>
          ))}
        </div>
      </section>
      <Questions></Questions>
    </div>
  );
};

export default Content;
