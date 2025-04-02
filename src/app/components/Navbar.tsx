import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-6 bg-[#f8e8d8] px-6 py-2 rounded-lg shadow-md text-gray-800 flex justify-center items-center space-x-3 border border-gray-300">
      {["Outdoors", "Groceries", "Study", "Events"].map((item, index) => (
        <React.Fragment key={index}>
          <Link href={`/${item.toLowerCase()}`}>
            <button className="px-3 py-1 rounded-lg hover:bg-[#e3d5c9] transition duration-200">{item}</button>
          </Link>
          {index < 3 && <span className="text-gray-600">|</span>} 
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
