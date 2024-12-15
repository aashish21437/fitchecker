import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const MEAL_DB_API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const GEMINI_API_KEY = "AIzaSyAbrf4J7s-tfCQp6Wy0Os1WngqOvOm6XtI";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Fetch from TheMealDB
export const fetchFromMealDB = async (dishName: string) => {
  try {
    console.log("Trying to fetch data from TheMealDB...");
    const response = await axios.get(`${MEAL_DB_API_URL}${dishName}`);
    const meals = response.data.meals;

    if (meals && meals.length > 0) {
      console.log("Recipe found in TheMealDB.");
      const meal = meals[0];
      return {
        name: meal.strMeal,
        category: meal.strCategory,
        area: meal.strArea,
        instructions: meal.strInstructions,
        image: meal.strMealThumb,
      };
    } else {
      console.log("Sorry, no recipe found from TheMealDB.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching from TheMealDB:", error.message);
    return null;
  }
};

// Fetch from Gemini API
export const fetchFromGemini = async (prompt: string) => {
  try {
    console.log("Sending query to Gemini API...");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const text = result.response.candidates[0]?.content?.parts[0]?.text;

    console.log("Gemini AI Response:");
    console.log(text);
    return text;
  } catch (error) {
    console.error("Error fetching from Gemini API:", error.message);
    return null;
  }
};

// Main function: Fetch recipe data
export const getRecipeByName = async (dishName: string) => {
  let recipeData = await fetchFromMealDB(dishName);

  if (!recipeData) {
    console.log("Fallback to Gemini API for the recipe...");
    const recipePrompt = `Provide a step-by-step recipe and a list of ingredients for the dish: "${dishName}".`;
    const geminiRecipe = await fetchFromGemini(recipePrompt);

    recipeData = geminiRecipe
      ? { name: dishName, instructions: geminiRecipe, ingredients: [] }
      : null;
  }

  return recipeData;
};
