import React from "react";

function Item({ item }) {
  const { name, category } = item;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{category}</h3>
      <button
        className="btn btn-primary"
        onClick={() => alert("You have just clicked me!")}
      >
        Click Me
      </button>
    </div>
  );
}

export default Item;
