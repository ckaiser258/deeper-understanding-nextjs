import { GetStaticProps } from "next";
import React from "react";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default UserList;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
};
