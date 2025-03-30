import { useState } from "react";
import { FaComment, FaEye, FaMailBulk, FaMobileAlt } from "react-icons/fa";
import guranteeImg from "/regppmt_guaranteed.jpg";
import { FaPerson } from "react-icons/fa6";
import { MdImportantDevices } from "react-icons/md";

export default function MembershipUpgrade() {
  const [selectedPlan, setSelectedPlan] = useState("diamond");
  const [selectedPrice, setSelectedPrice] = useState(4600);
  const [payment, setPayment] = useState("visa/master/amex/discover card");

  const handlePlanSelection = (plan, price) => {
    setSelectedPlan(plan);
    setSelectedPrice(price);
  };

  const handlePayment = (paymentMethod) => {
    const paymentName = paymentMethod.toLowerCase();
    setPayment(paymentName);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Membership Plans */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">MEMBERSHIP PLANS</h2>
        <div className="grid xs:grid-cols-1 grid-colsgrid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center border-b pb-4">
          {[
            { name: "GOLD", price3M: 3900, price6M: 7000 },
            { name: "DIAMOND", price3M: 4600, price6M: 8400 },
            { name: "PLATINUM", price3M: 5400, price6M: 9800 },
          ].map((plan) => (
            <div key={plan.name} className="p-3 border rounded-lg">
              <h3 className="font-medium">{plan.name}</h3>
              <div className="flex flex-col space-y-2 mt-2">
                <label className="cursor-pointer flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="membership"
                    value={plan.name.toLowerCase() + "-3m"}
                    checked={
                      selectedPlan === plan.name.toLowerCase() &&
                      selectedPrice === plan.price3M
                    }
                    onChange={() =>
                      handlePlanSelection(plan.name.toLowerCase(), plan.price3M)
                    }
                    className="radio radio-primary"
                  />
                  <span>BDT {plan.price3M}</span>
                </label>
                <label className="cursor-pointer flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="membership"
                    value={plan.name.toLowerCase() + "-6m"}
                    checked={
                      selectedPlan === plan.name.toLowerCase() &&
                      selectedPrice === plan.price6M
                    }
                    onChange={() =>
                      handlePlanSelection(plan.name.toLowerCase(), plan.price6M)
                    }
                    className="radio radio-primary"
                  />
                  <span>BDT {plan.price6M}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          {selectedPlan === "diamond" && selectedPrice === 4600 && (
            <div>
              <h2 className="text-lg font-bold">
                Benefits of Diamond 3 Months
              </h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
          {selectedPlan === "diamond" && selectedPrice === 8400 && (
            <div>
              <h2 className="text-lg font-bold">
                Benefits of Diamond 6 Months
              </h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
          {selectedPlan === "gold" && selectedPrice === 3900 && (
            <div>
              <h2 className="text-lg font-bold">Benefits of Gold 3 Months</h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
          {selectedPlan === "gold" && selectedPrice === 7000 && (
            <div>
              <h2 className="text-lg font-bold">
                Benefits of Diamond 6 Months
              </h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
          {selectedPlan === "platinum" && selectedPrice === 5400 && (
            <div>
              <h2 className="text-lg font-bold">
                Benefits of Platinum 3 Months
              </h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
          {selectedPlan === "platinum" && selectedPrice === 9800 && (
            <div>
              <h2 className="text-lg font-bold">
                Benefits of Platinum 6 Months
              </h2>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMailBulk className="text-lg"></FaMailBulk>
                  </span>
                  <p>Send Unlimited personalized messages* to your matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaMobileAlt className="text-lg"></FaMobileAlt>
                  </span>
                  <p>
                    View mobile numbers of 55 members to contact them directly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaPerson className="text-lg"></FaPerson>
                  </span>
                  <p>2 month Profile Highligter FREE (Get notice easily)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaComment></FaComment>
                  </span>
                  <p>Chat with Prospects Directly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <FaEye className="text-lg"></FaEye>
                  </span>
                  <p>View Photos of all matches</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">
                    <MdImportantDevices></MdImportantDevices>
                  </span>
                  <p>High profile visibility</p>
                </div>
                <div className="pt-4">
                  <img src={guranteeImg} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="btn btn-warning mt-4 w-full">UPGRADE NOW</button>
      </div>

      {/* Payment & Summary */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
        {/* Payment Options */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Payment Option</h3>
          <div className="space-y-3">
            {[
              "Visa/Master/Amex/Discover Card",
              "Pay with Paypal",
              "Pay at our Office",
            ].map((pay, indx) => (
              <button
                key={indx}
                className={`btn w-full ${payment === pay.toLowerCase() ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handlePayment(pay)}
              >
                {pay}
              </button>
            ))}
          </div>
          <div className="border mt-4 p-2 bg-gray-50 text-center rounded-lg">
            {payment === "visa/master/amex/discover card" && (
              <div>
                <strong>Pay Using Visa/Master/Amex/Discover Card</strong>
                <div className="p-2 mt-1">
                  <p className="text-sm">
                    All credit and debit cards (Visa/MasterCard) are accepted.
                    It's the most secure and convenient mode of payment online.
                  </p>
                  <button className="btn btn-success mt-2">Continue</button>
                </div>
              </div>
            )}
            {payment === "pay with paypal" && (
              <div>
                <strong>Pay Using PayPal</strong>
                <div className="p-2 mt-1">
                  <p className="text-sm">
                    Now you can pay through paypal account.
                  </p>
                  <button className="btn btn-success mt-2">Continue</button>
                </div>
              </div>
            )}
            {payment === "pay at our office" && (
              <div>
                <strong>EEFC Account Details</strong>
                <div className="p-2 mt-1">
                  <button className="btn btn-success mt-2">Continue</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Summary</h3>
          <p className="text-gray-700">
            Membership:{" "}
            <span className="font-medium">
              {selectedPlan.toUpperCase()}{" "}
              {selectedPrice === 4600 ||
              selectedPrice === 3900 ||
              selectedPrice === 5400
                ? "3 Months"
                : "6 Months"}
            </span>
          </p>
          <p className="text-xl font-semibold mt-2">
            Your Total:{" "}
            <span className="text-green-600">BDT {selectedPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
