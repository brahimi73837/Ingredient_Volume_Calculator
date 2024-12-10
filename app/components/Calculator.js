"use client";

import { useState } from "react";

export default function Calculator() {
  // States for user inputs
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [year, setYear] = useState(2023);
  const [inclusionRateInput, setInclusionRateInput] = useState("2%");
  const [ingredientCount, setIngredientCount] = useState(10);
  const [totalProductCount, setTotalProductCount] = useState(100);
  const [marketSize, setMarketSize] = useState(1000000);

  // States for the results
  const [ingredientPercentage, setIngredientPercentage] = useState(null);
  const [ingredientVolume, setIngredientVolume] = useState(null);
  const [adjustedIngredientVolume, setAdjustedIngredientVolume] = useState(null);

  // Calculation function
  const calculateValues = () => {
    const inclusionRate = parseFloat(inclusionRateInput.replace("%", "")) / 100;
    const ingredientPercentage = ((ingredientCount / totalProductCount) * 100).toFixed(2);
    const ingredientVolume = ((ingredientPercentage / 100) * marketSize).toFixed(2);
    const adjustedIngredientVolume = (ingredientVolume * (1 - inclusionRate)).toFixed(2);

    setIngredientPercentage(ingredientPercentage);
    setIngredientVolume(ingredientVolume);
    setAdjustedIngredientVolume(adjustedIngredientVolume);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-black">Ingredient Volume Calculator</h2>
      
      <div className="space-y-6">
        {/* Input Fields */}
        {[
          { label: "Category", value: category, setter: setCategory },
          { label: "Region", value: region, setter: setRegion },
          { label: "Ingredient", value: ingredient, setter: setIngredient },
          { label: "Year", value: year, setter: setYear, type: "number" },
          { label: "Inclusion Rate", value: inclusionRateInput, setter: setInclusionRateInput },
          { label: "Ingredient Count", value: ingredientCount, setter: setIngredientCount, type: "number" },
          { label: "Total Product Count", value: totalProductCount, setter: setTotalProductCount, type: "number" },
          { label: "Market Size (liters or Kgs)", value: marketSize, setter: setMarketSize, type: "number" },
        ].map(({ label, value, setter, type = "text" }, index) => (
          <div className="flex justify-between" key={index}>
            <label className="block w-1/3 text-black">{label}</label>
            <input
              type={type}
              value={value}
              onChange={(e) => setter(type === "number" ? Number(e.target.value) : e.target.value)}
              className="w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}
        
        {/* Calculate Button */}
        <div className="text-center mt-6">
          <button
            onClick={calculateValues}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
          >
            Calculate
          </button>
        </div>

        {/* Results */}
        {ingredientPercentage !== null && (
          <div className="mt-6 space-y-4 text-black">
            <p><strong>Ingredient Percentage:</strong> {ingredientPercentage}%</p>
            <p><strong>Ingredient Volume:</strong> {ingredientVolume} liters or Kgs</p>
            <p><strong>Adjusted Ingredient Volume:</strong> {adjustedIngredientVolume} liters or Kgs</p>
          </div>
        )}
      </div>
    </div>
  );
}
