import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full h-[450px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="p-8 rounded-t-lg bg-gray-300 dark:bg-gray-600 w-full h-[300px]"></div>
      <div className="px-5 pb-5">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"
                ></div>
              ))}
          </div>
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-200 ms-3">
            &nbsp;
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
