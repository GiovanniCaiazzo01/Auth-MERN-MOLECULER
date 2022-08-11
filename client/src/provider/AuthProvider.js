import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
