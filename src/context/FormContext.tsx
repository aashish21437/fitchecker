import React, { createContext, useContext, useState } from 'react';
import { UserData, DishData } from '../types';

interface FormContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  dishData: DishData;
  setDishData: React.Dispatch<React.SetStateAction<DishData>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    nutritionalValues: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    portionSize: '',
  });

  return (
    <FormContext.Provider value={{ userData, setUserData, dishData, setDishData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};