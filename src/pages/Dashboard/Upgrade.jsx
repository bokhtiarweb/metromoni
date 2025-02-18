import React, { useState } from "react";

const plans = [
  {
    id: "gold",
    name: "Gold",
    price: "BDT 3,900",
    features: [
      "Send unlimited messages and chat online",
      "View 40 verified mobile numbers",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    price: "BDT 4,600",
    features: [
      "Send unlimited messages and chat online",
      "View 55 verified mobile numbers",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "BDT 5,400",
    features: [
      "Send unlimited messages and chat online",
      "View 70 verified mobile numbers",
      "3 Months FREE Profile Highlighter",
    ],
  },
];
export default function Upgrade() {
  const [selectedPlan, setSelectedPlan] = useState("diamond");

  const plans = [
    {
      id: "gold",
      name: "Gold",
      price: "BDT 3,900",
      features: [
        "Send unlimited messages and chat online",
        "View 40 verified mobile numbers",
      ],
    },
    {
      id: "diamond",
      name: "Diamond",
      price: "BDT 4,600",
      features: [
        "Send unlimited messages and chat online",
        "View 55 verified mobile numbers",
      ],
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "BDT 5,400",
      features: [
        "Send unlimited messages and chat online",
        "View 70 verified mobile numbers",
        "3 Months FREE Profile Highlighter",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Regular Packages
      </h2>
      <div className="flex gap-4 mb-6">
        {["3 Months", "6 Months", "1 Year"].map((duration) => (
          <button
            key={duration}
            className="border rounded-full px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition"
          >
            {duration}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border ${
              selectedPlan === plan.id ? "border-red-500" : "border-gray-300"
            } rounded-lg p-6 w-80 shadow-lg flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-lg font-semibold text-red-500">{plan.price}</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Fixed Bottom Button */}
            <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
