import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-md font-medium transition duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
