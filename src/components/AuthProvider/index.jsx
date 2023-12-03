import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState("student");

  const setRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <AuthContext.Provider value={{ selectedRole, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
