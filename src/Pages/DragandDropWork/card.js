import React from "react";

const Card = ({ id, name, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id, name)}
      style={{
        padding: "16px",
        margin: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9",
        cursor: "move",
      }}
    >
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Card;
