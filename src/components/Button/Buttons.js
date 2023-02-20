import React from "react";

function Buttons({ title,  hendClick}) {
  function btn() {}
  return (
    <button
      className="  p-4 mt-4 ml-[650px] btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
    font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600
     group-hover:to-blue-500 hover:text-white
     dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
    >
      {title}
      {hendClick}
    </button>
  );
}

export default Buttons;
