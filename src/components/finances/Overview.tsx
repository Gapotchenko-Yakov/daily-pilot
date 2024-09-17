import React from "react";

const Overview = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="flex gap-6">
        <div className="flex-1 bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Income</h3>
          <p className="text-xl font-bold">$5,000.00</p>
        </div>
        <div className="flex-1 bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Expenses</h3>
          <p className="text-xl font-bold">$2,500.00</p>
        </div>
        <div className="flex-1 bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Net Balance</h3>
          <p className="text-xl font-bold">$2,500.00</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
