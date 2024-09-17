import React from "react";

const TransactionDetails = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium">Transaction #12345</h3>
        <p className="text-gray-600">Date: 2024-09-15</p>
        <p className="text-gray-800 mt-2">
          Detailed description of the transaction goes here.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold text-2xl">$200.00</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

export default TransactionDetails;
