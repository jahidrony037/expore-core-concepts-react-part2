import React from "react";

const User = ({ user, id }) => {
  console.log(user);
  const { name, email } = user;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        border: "1px solid red",
        borderRadius: "10px",
        margin: "10px",
        alignItems: "center",
      }}
    >
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
