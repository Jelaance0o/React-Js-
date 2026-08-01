import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const User = "jelaance";

  return (
    <UserDataContext.Provider value={User}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
