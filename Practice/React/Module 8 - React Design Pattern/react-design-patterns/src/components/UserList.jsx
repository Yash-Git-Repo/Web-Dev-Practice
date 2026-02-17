import React from "react";
import "./UserList.css";

const UserList = ({ users, loading, error }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error fetching data , {error.message} </h2>;
  }
  if (users.length === 0) {
    return <h2>No Users Found</h2>;
  }
  return (
    <div className="main">
      {users.map((user) => {
        return (
          <>
            <div >
              <img
                src={user.image}
                alt={user.firstName}
                width="100"
              />
              <div key={user.id}>
                {user.firstName} {user.lastName}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserList;
