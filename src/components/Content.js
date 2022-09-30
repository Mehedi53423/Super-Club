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
    <div className="container mx-auto">
      <h1 className="text-xl font-bold my-2 py-2">Select Today's Activity</h1>
      {activities.map((activity) => (
        <Cards key={activity.id} activity={activity}></Cards>
      ))}
    </div>
  );
};

export default Content;
