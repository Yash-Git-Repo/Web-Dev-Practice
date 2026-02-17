import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserAuth = (WrapperComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = false;

    useEffect(() => {
      console.log("User Authentication", isAuthenticated);
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? (
      <WrapperComponent {...props} />
    ) : (
      <div>Please login to access this component.</div>
    );
  };
};

export default UserAuth;
