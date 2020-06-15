import React from "react";

export const List = ({ politicians }) => {
  return (
    <div>
      {politicians.map((politician) => (
        <h1 key={politician.id}>{politician.name}</h1>
      ))}
    </div>
  );
};
