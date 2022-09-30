import React from "react";

const Questions = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl font-bold mb-5">Questions</h1>
      <div className="grid grid-cols-1 gap-4">
        <article className="p-3 bg-white rounded-xl shadow-xl">
          <h1 className="text-lg font-semibold">How does react work ?</h1>
          <p className="text-lg">
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </article>
        <article className="p-3 bg-white rounded-xl shadow-xl">
          <h1 className="text-lg font-semibold">
            Difference between props and state ?
          </h1>
          <h1 className="text-lg font-semibold">State:</h1>
          <ul className="text-lg">
            <li>1. States are mutable.</li>
            <li>
              2. States are associated with the individual components can't be
              used by other components.
            </li>
            <li>3. States are initialize on component mount.</li>
          </ul>
          <h1 className="text-lg font-semibold">Props:</h1>
          <ul className="text-lg">
            <li>1. Props are immutable.</li>
            <li>2. You can pass props between components.</li>
            <li>
              3. props are mostly used to communicate between components.You can
              pass from parent to child directly. For passing from child to
              parent you need use concept of lifting up states.
            </li>
          </ul>
        </article>
        <article className="p-3 bg-white rounded-xl shadow-xl">
          <h1 className="text-lg font-semibold">
            Uses of useeffect other than data loading ?
          </h1>
          <ul className="text-lg">
            <li>Reading from local storage.</li>
            <li>Registering event listeners.</li>
            <li>Deregistering event listeners.</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Questions;
