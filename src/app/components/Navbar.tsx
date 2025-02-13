import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-4 bg-[#F4E5D8] px-6 py-2 rounded-full shadow-md text-lg">
      {["Outdoors", "Groceries", "Study", "Events"].map((item, index) => (
        <React.Fragment key={index}>
          <button className="px-4 py-1 rounded-full hover:bg-[#e3d2c3]">{item}</button>
          {index < 3 && <span>|</span>} 
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
