import React from 'react';

export const Loading = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full"></div>
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full mx-10"></div>
      <div className="animate-ping h-3 w-3 bg-blue-600 rounded-full"></div>
    </div>
  );
};
