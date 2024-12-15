// import React from 'react';
// import { useFormContext } from '../context/FormContext';
// import { ClipboardList } from 'lucide-react';

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

//             {/* <div>
//               <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
//               <ul className="mt-2 list-disc list-inside space-y-1">
//                 {dishData.ingredients.map((ingredient, index) => (
//                   <li key={index} className="text-gray-600">{ingredient.name}</li>
//                 ))}
//               </ul>
//             </div> */}

//             <div>
//               <h3 className="text-lg font-medium text-gray-900">Nutritional Information</h3>
//               <p className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-600">
//                 {dishData.nutritionalText || "Nutritional information is unavailable."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryPage;



import React from 'react';
import { useFormContext } from '../context/FormContext';
import { ClipboardList } from 'lucide-react';

const SummaryPage: React.FC = () => {
  const { dishData, userData } = useFormContext();

  // Calculate BMI
  const calculateBMI = (): number => {
    if (userData.height && userData.weight) {
      const heightInMeters = userData.height / 100;
      return +(userData.weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    return 0;
  };

  const bmi = calculateBMI();

  // Generate Recommendations
  const generateRecommendations = (): string => {
    if (!bmi) return 'Please provide valid height and weight in your personal information.';
    
    if (bmi < 18.5) {
      return `Your BMI (${bmi}) indicates you are underweight. Focus on calorie-dense foods, balanced meals, and healthy protein sources to help gain weight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return `Your BMI (${bmi}) is in the normal range. Maintain a balanced diet and stay active to keep your weight stable.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      return `Your BMI (${bmi}) indicates you are overweight. Focus on nutrient-dense, low-calorie meals and regular physical activity to achieve your goal.`;
    } else {
      return `Your BMI (${bmi}) indicates obesity. It's important to reduce calorie intake, eat nutrient-rich meals, and engage in regular exercise for a healthy weight.`;
    }
  };

  const recommendations = generateRecommendations();

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

            <div>
              <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                {dishData.ingredients.map((ingredient: any, index: number) => (
                  <li key={index} className="text-gray-600">{ingredient.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Nutritional Information</h3>
              <p className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-600">
                {dishData.nutritionalText || "Nutritional information is unavailable."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Your BMI</h3>
              <p className="mt-1 text-gray-600">
                {bmi ? `Your BMI is ${bmi}` : 'BMI cannot be calculated without valid height and weight.'}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Personalized Recommendations</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">{recommendations}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
