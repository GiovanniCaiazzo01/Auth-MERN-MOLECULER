import axios from "axios";
import React, { useState, useEffect, createContext, Children } from "react";

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleFetch = () => {
    const data = axios.post("http://localhost:5000/auth/login");
  };

  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContextProvider;
