export interface UserData {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  goal: string;
}

export interface DishData {
  name: string;
  ingredients: string[];
  nutritionalValues: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  portionSize: string;
}