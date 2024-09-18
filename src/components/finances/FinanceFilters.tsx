import React from "react";

const FinanceFilters = () => {
  return (
    <section className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="date-range"
            className="block text-gray-700 dark:text-gray-300"
          >
            Date Range
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className=" bg-gray-200 dark:bg-gray-500 mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 text-white"
          />
          <input
            type="date"
            id="end-date"
            name="end-date"
            className=" bg-gray-200 dark:bg-gray-500 mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 text-white"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-gray-700 dark:text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className=" bg-gray-200 dark:bg-gray-500 mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 text-white"
          >
            <option value="">All Categories</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 dark:bg-blue-900 text-white px-4 py-2 rounded shadow-xl"
        >
          Apply Filters
        </button>
      </form>
    </section>
  );
};

export default FinanceFilters;
