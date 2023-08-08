import React, { createContext, useContext, useState } from "react";

const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [editedProduct, setEditedProduct] = useState(null);

  return (
    <EditContext.Provider value={{ editedProduct, setEditedProduct }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEditContext = () => {
  return useContext(EditContext);
};
