import React, { useState } from "react";

const App = () => {
  const [inp, inpup] = useState("");
  const [item, itemsup] = useState([]);

  const Inc = (x) => {
    inpup(x.target.value);
  };
  const list = () => {
    itemsup((olditems) => {
      return [...olditems, inp];
    });
  };
  return (
    <>
      <h2>TODO</h2>
      <input type="text" placeholder="add here" onChange={Inc} />
      <button onClick={list}>+ </button>
      <h1>
        {item.map((itemval, index) => {
          return (
            <>
              <i>DELETE{index}</i>
              <li>{itemval}</li>
            </>
          );
        })}
      </h1>
    </>
  );
};

export default App;
