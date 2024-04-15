import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
        <p className="text-gray-700 mt-4">Wait, we are fetching data for you</p>
      </div>
    </div>
  );
};

export default ShimmerEffect;
