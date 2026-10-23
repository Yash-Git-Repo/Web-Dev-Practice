import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
import apiClient from "../../utils/api-client";
import { useQuery } from "@tanstack/react-query";
import useUsers from '../../../src/hooks/useUsers'

const Sellers = () => {
  const { data: users, error, isLoading }  = useUsers()

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    // setIsLoading(true);
    console.log("Component Mount");

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setUsers(response.data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching users:", error);
    //     setError(error.message);
    //     setIsLoading(false);
    //   });

    // fetchUsers();

    return () => {
      console.log("Component Unmount");
    };
  }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await apiClient.get("/users");
  //     setUsers(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //     setError(error.message);
  //     setIsLoading(false);
  //   }
  // };

  const addUser = () => {
    const newUser = {
      name,
      id: users.length + 1,
    };
    apiClient.post("/users", newUser).then((response) => {
      console.log("User added:", response.data);
      setUsers([...users, response.data]);
    });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    apiClient.delete("/users/${id}", id).then((response) => {
      console.log("User deleted:", response.data);
      setUsers(users);
    });
  };

  const updateUser = (user) => {
    const UpdateUser = {
      ...user,
      name: user.name + "   Updated",
    };
    setUsers(users.map((u) => (u.id === user.id ? UpdateUser : u)));
    console.log(users);
    apiClient.patch("/users/${user.id}", UpdateUser);
    setError(error.message);
    setUsers(users);
  };

  return (
    <>
      <h3>Admin Sellers Page</h3>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
      {users?.map((user) => (
        <tr>
          <td>
            <p>
              <div key={user.id}>{user.name}</div>
              <button onClick={() => handleDelete(user.id)}>Delete</button>

              <button
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
            </p>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Sellers;
