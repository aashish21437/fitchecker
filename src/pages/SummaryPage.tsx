import React from 'react';
import { useFormContext } from '../context/FormContext';
import { ClipboardList } from 'lucide-react';

// const SummaryPage: React.FC = () => {
//   const { dishData } = useFormContext();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-8 py-6">
//           <div className="flex items-center justify-center mb-6">
//             <ClipboardList className="h-12 w-12 text-indigo-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             Meal Summary
//           </h2>
          
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Dish Name</h3>
//               <p className="mt-1 text-gray-600">{dishData.name}</p>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
//               <ul className="mt-2 list-disc list-inside space-y-1">
//                 {dishData.ingredients.map((ingredient, index) => (
//                   <li key={index} className="text-gray-600">{ingredient}</li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Nutritional Values</h3>
//               <ul className="mt-2 list-disc list-inside space-y-1">
//                 <li className="text-gray-600">Calories: {dishData.nutritionalValues.calories} kcal</li>
//                 <li className="text-gray-600">Protein: {dishData.nutritionalValues.protein}g</li>
//                 <li className="text-gray-600">Carbohydrates: {dishData.nutritionalValues.carbs}g</li>
//                 <li className="text-gray-600">Fat: {dishData.nutritionalValues.fat}g</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Recommended Portion Size</h3>
//               <div className="mt-2 p-4 bg-gray-50 rounded-lg">
//                 <p className="text-gray-600">
//                   Based on your goals and nutritional needs, we recommend:
//                   {dishData.portionSize || '1 serving (approximately 250g) per meal'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryPage;

const SummaryPage: React.FC = () => {
  const { dishData } = useFormContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6">
          <div className="flex items-center justify-center mb-6">
            <ClipboardList className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Meal Summary
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Dish Name</h3>
              <p className="mt-1 text-gray-600">{dishData.name}</p>
            </div>

            {/* <div>
              <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                {dishData.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient.name}</li>
                ))}
              </ul>
            </div> */}

            <div>
              <h3 className="text-lg font-medium text-gray-900">Nutritional Information</h3>
              <p className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-600">
                {dishData.nutritionalText || "Nutritional information is unavailable."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
