import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

const initialState = {
  isAuth: true,
};

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const myFunction = () => {
    // Логика вашей функции
  };

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
