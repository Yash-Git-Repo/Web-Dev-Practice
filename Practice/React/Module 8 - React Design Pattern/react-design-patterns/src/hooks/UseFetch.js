import React, { useEffect, useState } from "react";

const UseFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const json = await response.json();
      console.log(json.users);
      if (!json.users) return;
      setUsers(json.users);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, loading, error };
};

export default UseFetch;
