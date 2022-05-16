import React from "react";

function Skeleton() {
  return (
    <div className=" border-2 rounded-3xl">
      <div className="animate-pulse items-center h-full justify-center space-y-2 p-3">
        <div className="w-full bg-gray-300 h-4"></div>
        <div className="w-full bg-gray-300 h-4"></div>
        <div className="w-full bg-gray-300 h-4"></div>
        <div className="w-full bg-gray-300 h-4"></div>
        <div className="w-full bg-gray-300 h-4"></div>
        <div className="w-full bg-gray-300 h-4"></div>
      </div>
    </div>
  );
}

export default Skeleton;
