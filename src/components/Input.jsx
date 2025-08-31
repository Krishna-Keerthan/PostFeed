import React, {useId} from "react";

const Input = React.forwardRef(
  function Input({ label, type = "text", className = "", ...props }, ref) {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-gray-700 font-medium text-sm"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          {...props}
          className={`w-full px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 ${className}`}
        />
      </div>
    );
  }
);

export default Input;
