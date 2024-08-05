import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component that provides authentication state to its children
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem('User');
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  // useEffect hook to update localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem('User', JSON.stringify(authUser));
    } else {
      localStorage.removeItem('User');
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
