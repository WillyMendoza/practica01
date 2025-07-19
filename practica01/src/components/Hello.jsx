import React from "react";

const Hello = ({ person }) => {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name}{" "}
        {person.seatNumbers.map((seat) => seat)}
      </h1>
    </div>
  );
};

export default Hello;
