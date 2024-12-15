// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useFormContext } from '../context/FormContext';
// // import { Search, Utensils } from 'lucide-react';
// // import axios from 'axios';
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // const DishPage: React.FC = () => {
// //   const navigate = useNavigate();
// //   const { dishData, setDishData } = useFormContext();
// //   const [loading, setLoading] = useState(false);

// //   // const fetchDishData = async () => {
// //   //   setLoading(true);
// //   //   try {
// //   //     // Using the Edamam API as an example
// //   //     const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${dishData.name}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`);
      
// //   //     // This is a mock response since we don't have actual API keys
// //   //     const mockData = {
// //   //       ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
// //   //       nutritionalValues: {
// //   //         calories: 300,
// //   //         protein: 20,
// //   //         carbs: 30,
// //   //         fat: 10
// //   //       }
// //   //     };

// //   //     setDishData({
// //   //       ...dishData,
// //   //       ingredients: mockData.ingredients,
// //   //       nutritionalValues: mockData.nutritionalValues
// //   //     });
// //   //   } catch (error) {
// //   //     console.error('Error fetching dish data:', error);
// //   //   } finally {
// //   //     setLoading(false);
// //   //   }
// //   // };



// //   const fetchDishData = async () => {
// //     setLoading(true);
// //     const genAI = new GoogleGenerativeAI("AIzaSyB99KoBSmf-WjEZDqSnXgnWjvn8WamBfr4");
// //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
// //     try {
// //       // Replace this part with the Google Generative AI request
// //       const prompt = `Provide me all the major ingredients of this dish: ${dishData.name}`;
// //       const result = await model.generateContent(prompt);

// //       console.log(result)
  
// //       // Assuming the response includes formatted information about ingredients and nutrition
// //       const formattedData = JSON.parse(result.response.text()); // Adjust based on actual output format

// //       console.log(formattedData)
  
// //       setDishData({
// //         ...dishData,
// //         ingredients: formattedData.ingredients,
// //         nutritionalValues: formattedData.nutritionalValues
// //       });
  
// //     } catch (error) {
// //       console.error('Error fetching dish data:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
  


// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     navigate('/summary');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
// //         <div className="px-8 py-6">
// //           <div className="flex items-center justify-center mb-6">
// //             <Utensils className="h-12 w-12 text-indigo-600" />
// //           </div>
// //           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
// //             Dish Information
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="flex space-x-4">
// //               <div className="flex-grow">
// //                 <label className="block text-sm font-medium text-gray-700">Dish Name</label>
// //                 <input
// //                   type="text"
// //                   required
// //                   value={dishData.name}
// //                   onChange={(e) => setDishData({ ...dishData, name: e.target.value })}
// //                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                 />
// //               </div>
// //               <button
// //                 type="button"
// //                 onClick={fetchDishData}
// //                 disabled={loading}
// //                 className="mt-7 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //               >
// //                 {loading ? (
// //                   <span className="animate-spin">↻</span>
// //                 ) : (
// //                   <Search className="h-5 w-5" />
// //                 )}
// //               </button>
// //             </div>

// //             {dishData.ingredients.length > 0 && (
// //               <div className="mt-4">
// //                 <h3 className="text-lg font-medium text-gray-900">Ingredients:</h3>
// //                 <ul className="mt-2 list-disc list-inside space-y-1">
// //                   {dishData.ingredients.map((ingredient, index) => (
// //                     <li key={index} className="text-gray-600">{ingredient}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             <div className="flex justify-end space-x-4">
// //               <button
// //                 type="submit"
// //                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DishPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useFormContext } from '../context/FormContext';
// import { Search, Utensils } from 'lucide-react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { getRecipeByName } from '../fetchRecipe';

// const DishPage: React.FC = () => {
//   const navigate = useNavigate();
//   const { dishData, setDishData } = useFormContext();
//   const [loading, setLoading] = useState(false);
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const genAI = new GoogleGenerativeAI("AIzaSyB99KoBSmf-WjEZDqSnXgnWjvn8WamBfr4");
//     setModel(genAI.getGenerativeModel({ model: "gemini-1.5-flash" }));
//   }, []);

//   const fetchDishData = async () => {
//     setLoading(true);
//     try {
//       const recipeData = await getRecipeByName(dishData.name);
  
//       if (recipeData) {
//         const ingredientsList = recipeData.instructions
//           .split(/,\s*|\sand\s*/)
//           .map((ingredient: string) => ingredient.trim());
  
//         setDishData({
//           ...dishData,
//           ingredients: ingredientsList.map((ingredient) => ({ name: ingredient, checked: false })),
//           recipeDetails: recipeData, // Add details to state if needed
//         });
//       } else {
//         console.error("Recipe not found.");
//       }
//     } catch (error) {
//       console.error("Error fetching recipe:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCheckboxChange = (index) => {
//     const newIngredients = dishData.ingredients.map((ingredient, i) => {
//       if (i === index) {
//         return { ...ingredient, checked: !ingredient.checked };
//       }
//       return ingredient;
//     });
//     setDishData({ ...dishData, ingredients: newIngredients });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!model) {
//       console.error("Model not loaded yet.");
//       return;
//     }
//     const selected = dishData.ingredients.filter(ing => ing.checked).map(ing => ing.name).join(', ');

//     try {
//       const nutritionPrompt = `Assuming standard quantities, what is the nutritional value per 100g of a dish made with ${selected}? No need to tell me anything else only tell me the approximate nutritional value per 100g tell me only this, assume your own quantity and everything else dont tell it is impossible to give an exact nutrional value in the beginning`;
//       const nutritionResult = await model.generateContent(nutritionPrompt);
//       console.log(nutritionResult);

//       if (nutritionResult?.response?.candidates[0]?.content?.parts[0]?.text) {
//         setDishData({
//           ...dishData,
//           nutritionalText: nutritionResult.response.candidates[0].content.parts[0].text
//         });
//         navigate('/summary');
//       } else {
//         console.error("Nutritional data not provided by the model.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch nutritional data:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-8 py-6">
//           <div className="flex items-center justify-center mb-6">
//             <Utensils className="h-12 w-12 text-indigo-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             Dish Information
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="flex space-x-4">
//               <div className="flex-grow">
//                 <label className="block text-sm font-medium text-gray-700">Dish Name</label>
//                 <input
//                   type="text"
//                   required
//                   value={dishData.name}
//                   onChange={(e) => setDishData({ ...dishData, name: e.target.value })}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={fetchDishData}
//                 disabled={loading}
//                 className="mt-7 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 {loading ? <span className="animate-spin">↻</span> : <Search className="h-5 w-5" />}
//               </button>
//             </div>
//             {dishData.ingredients && dishData.ingredients.length > 0 && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-medium text-gray-900">Ingredients:</h3>
//                 <ul className="mt-2 list-disc list-inside space-y-1">
//                   {dishData.ingredients.map((ingredient, index) => (
//                     <li key={index} className="flex items-center text-gray-600">
//                       <input
//                         type="radio"
//                         checked={ingredient.checked}
//                         onChange={() => handleCheckboxChange(index)}
//                         className="mr-2"
//                       />
//                       {ingredient.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="submit"
//                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import { Search, Utensils } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getRecipeByName } from '../fetchRecipe';

const DishPage: React.FC = () => {
  const navigate = useNavigate();
  const { dishData, setDishData } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<any>(null);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI("AIzaSyB99KoBSmf-WjEZDqSnXgnWjvn8WamBfr4");
    setModel(genAI.getGenerativeModel({ model: "gemini-1.5-flash" }));
  }, []);

  const fetchDishData = async () => {
    setLoading(true);
    try {
      const recipeData = await getRecipeByName(dishData.name);

      if (recipeData) {
        const ingredientsList = recipeData.instructions
          .split(/,\s*|\sand\s*/)
          .map((ingredient: string) => ingredient.trim());

        setDishData({
          ...dishData,
          ingredients: ingredientsList.map((ingredient) => ({ name: ingredient, checked: false })),
          recipeDetails: recipeData, // Add details to state if needed
        });
      } else {
        console.error("Recipe not found.");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!model) {
      console.error("Model not loaded yet.");
      return;
    }

    try {
      const selectedIngredients = dishData.ingredients.map((ing) => ing.name).join(', ');
      const nutritionPrompt = `Assuming standard quantities, what is the nutritional value per 100g of a dish made with ${selectedIngredients}? No need to tell me anything else; only tell me the approximate nutritional value per 100g.`;

      const nutritionResult = await model.generateContent(nutritionPrompt);
      console.log(nutritionResult);

      if (nutritionResult?.response?.candidates[0]?.content?.parts[0]?.text) {
        setDishData({
          ...dishData,
          nutritionalText: nutritionResult.response.candidates[0].content.parts[0].text
        });
        navigate('/summary');
      } else {
        console.error("Nutritional data not provided by the model.");
      }
    } catch (error) {
      console.error("Failed to fetch nutritional data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Dish Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700">Dish Name</label>
                <input
                  type="text"
                  required
                  value={dishData.name}
                  onChange={(e) => setDishData({ ...dishData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={fetchDishData}
                disabled={loading}
                className="mt-7 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? <span className="animate-spin">↻</span> : <Search className="h-5 w-5" />}
              </button>
            </div>

            {dishData.ingredients && dishData.ingredients.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">Ingredients:</h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {dishData.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishPage;
