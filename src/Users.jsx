import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };

  console.log(users.length);

  return (
    <div>
      <h1>users: {users.length}</h1>
      {users.map((user) => (
        <User user={user} id={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
