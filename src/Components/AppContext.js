// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData]= useState([''])


  return (
    <AppContext.Provider
      value={{
        filteredData,
        setFilteredData,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
