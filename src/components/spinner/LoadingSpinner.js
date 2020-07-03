import React from "react";

const LoadingSpinner = () => {
  return (
    <span className="text-green-500 opacity-75 my-32 mx-auto flex items-center justify-center">
      <i className="fas fa-circle-notch fa-spin fa-5x"></i>
    </span>
  );
};
export default LoadingSpinner;
