import { createContext, useContext, useEffect, useState } from "react";

// Create the AuthContext
const AuthContext = createContext(null);

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("auth");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  // Provide the auth state and methods to the context
  const authContextValue = {
    isLoggedIn,
    logout,
  };

  useEffect(() => {
    const loginStatus = sessionStorage.getItem("auth");

    if (loginStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
