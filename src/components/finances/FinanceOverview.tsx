import React from "react";

const FinanceOverview = () => {
  return (
    <section className="bg-alt shadow-lg rounded-lg p-6 mb-6">
      <h2 className="h2 text-gray-900 dark:text-gray-100">Overview</h2>
      <div className="flex gap-6">
        <div className="flex-1 bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Total Income
          </h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
            $5,000.00
          </p>
        </div>
        <div className="flex-1 bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Total Expenses
          </h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
            $2,500.00
          </p>
        </div>
        <div className="flex-1 bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Net Balance
          </h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
            $2,500.00
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinanceOverview;
