import { createContext, useContext } from "react";

export const UserContext = createContext(null);

//custom hook
export const useUserDetails = () => {
  const userContext = useContext(UserContext);  
  if(!userContext){
    throw new Error("useUserDetails must be used within a UserContextProvider")
  }
  return userContext;
}


export const UserContextProvider = ({ children, userDetails }) => {
  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
};
