import React, { createContext, useContext, useState, ReactNode } from 'react';

// Interfaces
interface UserData {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  goal: string;
}

interface DishData {
  name: string;
  ingredients: { name: string; checked: boolean }[];
  nutritionalText: string;
}

// Context Type
interface FormContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  dishData: DishData;
  setDishData: React.Dispatch<React.SetStateAction<DishData>>;
}

// Create Context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider Component
export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: 0,
    gender: '',
    height: 0,
    weight: 0,
    goal: '',
  });

  const [dishData, setDishData] = useState<DishData>({
    name: '',
    ingredients: [],
    nutritionalText: '',
  });

  return (
    <FormContext.Provider value={{ userData, setUserData, dishData, setDishData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom Hook for Using the Context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};
