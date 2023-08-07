import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-50 z-[99]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white" />
    </div>
  );
};

export default Loading;
