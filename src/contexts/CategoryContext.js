import React, { createContext, useState } from "react";
import { CATS } from "../constants";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(CATS);

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
