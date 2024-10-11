import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is stored in localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (username, password) => {
    // In a real app, you'd hash the password before storing it
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    console.log('User registered:', newUser); // For debugging
  };

  const login = (username, password) => {
    console.log('Login attempt for:', username); // For debugging
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored user:', storedUser); // For debugging
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
      console.log('Login successful'); // For debugging
      return true;
    }
    console.log('Login failed'); // For debugging
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);