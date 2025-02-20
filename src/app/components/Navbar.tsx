import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 space-x-4  px-6 py-2 rounded-full shadow-md text-lg">
      {["Outdoors", "Groceries", "Study", "Events"].map((item, index) => (
        <React.Fragment key={index}>
          <Link href={`/${item.toLowerCase()}`}>
            <button className="px-4 py-1 rounded-full hover:bg-[#e3d2c3]">{item}</button>
          </Link>
          {index < 3 && <span>|</span>} 
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
