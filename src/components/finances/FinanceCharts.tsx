import React from "react";

const FinanceCharts = () => {
  return (
    <section className="section-card">
      <h2 className="h2">Charts</h2>
      <div className="flex gap-6">
        <div className="flex-1 bg-gray-200 dark:bg-gray-500 h-60 rounded-lg flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300">
            Income vs Expenses Chart
          </p>
        </div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-500 h-60 rounded-lg flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300">
            Monthly Spending Chart
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinanceCharts;
