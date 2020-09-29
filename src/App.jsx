import React, { useState } from "react";

const Spp = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(time);
  const update = () => {
    time = new Date().toLocaleTimeString();
    settime(time);
  };
  setInterval(update, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default Spp;
