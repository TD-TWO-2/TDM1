import React, { useState } from "react";
import Card from "./card";

const DragAndDropWithButtons = () => {
  const [userCards, setUserCards] = useState([
    { id: "u1", name: "User 1" },
    { id: "u2", name: "User 2" },
  ]);

  const [employeeCards, setEmployeeCards] = useState([
    { id: "e1", name: "Employee 1" },
    { id: "e2", name: "Employee 2" },
  ]);

  // Move the first card from User to Employee
  const moveToEmployee = () => {
    if (userCards.length > 0) {
      const cardToMove = userCards[0];
      setEmployeeCards([...employeeCards, cardToMove]);
      setUserCards(userCards.slice(1));
    }
  };

  // Move the first card from Employee to User
  const moveToUser = () => {
    if (employeeCards.length > 0) {
      const cardToMove = employeeCards[0];
      setUserCards([...userCards, cardToMove]);
      setEmployeeCards(employeeCards.slice(1));
    }
  };

  // Move all cards from User to Employee
  const moveAllToEmployee = () => {
    setEmployeeCards([...employeeCards, ...userCards]);
    setUserCards([]);
  };

  // Move all cards from Employee to User
  const moveAllToUser = () => {
    setUserCards([...userCards, ...employeeCards]);
    setEmployeeCards([]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "200px",
          minHeight: "300px",
          padding: "16px",
          border: "2px dashed #ccc",
          borderRadius: "8px",
        }}
      >
        <h3>Users</h3>
        {userCards.map((card) => (
          <Card key={card.id} id={card.id} name={card.name} />
        ))}
      </div>

      <div style={{ margin: "0 16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={moveToEmployee} style={{ marginBottom: "8px" }}>
          &gt;
        </button>
        <button onClick={moveToUser} style={{ marginBottom: "16px" }}>
          &lt;
        </button>
        <button onClick={moveAllToEmployee} style={{ marginBottom: "8px" }}>
          &gt;&gt;
        </button>
        <button onClick={moveAllToUser}>
          &lt;&lt;
        </button>
      </div>

      <div
        style={{
          width: "200px",
          minHeight: "300px",
          padding: "16px",
          border: "2px dashed #ccc",
          borderRadius: "8px",
        }}
      >
        <h3>Employees</h3>
        {employeeCards.map((card) => (
          <Card key={card.id} id={card.id} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropWithButtons;




// import React, { useState } from "react";
// import Card from "./card";


// const DragAndDrop = () => {
//   const [userCards, setUserCards] = useState([
//     { id: "u1", name: "User 1" },
//     { id: "u2", name: "User 2" },
//   ]);

//   const [employeeCards, setEmployeeCards] = useState([
//     { id: "e1", name: "Employee 1" },
//     { id: "e2", name: "Employee 2" },
//   ]);

//   const onDragStart = (e, id, name) => {
//     e.dataTransfer.setData("id", id);
//     e.dataTransfer.setData("name", name);
//   };

//   const onDrop = (e, isEmployeeBox) => {
//     const id = e.dataTransfer.getData("id");
//     const name = e.dataTransfer.getData("name");

//     if (isEmployeeBox) {
//       setEmployeeCards([...employeeCards, { id, name }]);
//       setUserCards(userCards.filter((card) => card.id !== id));
//     } else {
//       setUserCards([...userCards, { id, name }]);
//       setEmployeeCards(employeeCards.filter((card) => card.id !== id));
//     }
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "space-around" }}>
//       <div
//         onDrop={(e) => onDrop(e, false)}
//         onDragOver={(e) => onDragOver(e)}
//         style={{
//           width: "200px",
//           minHeight: "300px",
//           padding: "16px",
//           border: "2px dashed #ccc",
//           borderRadius: "8px",
//         }}
//       >
//         <h3>Users</h3>
//         {userCards.map((card) => (
//           <Card key={card.id} id={card.id} name={card.name} onDragStart={onDragStart} />
//         ))}
//       </div>
//       <div
//         onDrop={(e) => onDrop(e, true)}
//         onDragOver={(e) => onDragOver(e)}
//         style={{
//           width: "200px",
//           minHeight: "300px",
//           padding: "16px",
//           border: "2px dashed #ccc",
//           borderRadius: "8px",
//         }}
//       >
//         <h3>Employees</h3>
//         {employeeCards.map((card) => (
//           <Card key={card.id} id={card.id} name={card.name} onDragStart={onDragStart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DragAndDrop;
