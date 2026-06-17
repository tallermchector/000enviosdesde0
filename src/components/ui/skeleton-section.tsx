import React from 'react';

export function SkeletonSection() {
  return (
    <div className="w-full py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
