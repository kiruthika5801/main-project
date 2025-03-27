import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const users = useSelector((state) => state.user.users); // Accessing users from Redux state

  if (!users || users.length === 0) {
    return <h2>No users registered</h2>;
  }

  return (
    <div>
      <h2>Registered Users</h2>
      {users.map((user, index) => (
        <div key={index}>
          <h4>User {index + 1}</h4>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.telephone}</p>
          <p><strong>Address:</strong> {user.address}, {user.city}, {user.state}, {user.country}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Profile;


