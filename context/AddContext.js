import React, { createContext, useContext, useState } from "react";

const AddContext = createContext();

export const AddProvider = ({ children }) => {
  const [addedProduct, setAddedProduct] = useState(null);

  return (
    <AddContext.Provider value={{ addedProduct, setAddedProduct }}>
      {children}
    </AddContext.Provider>
  );
};

export const useAddContext = () => {
  return useContext(AddContext);
};
