import React from "react";
import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  icon?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ href, title, icon }) => {
  return (
    <div
      className="p-6 bg-[#fdf1e4] border border-gray-300 shadow-md rounded-xl text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <Link href={href}>
        <div className="flex flex-col items-center">
          {icon && <div className="mb-4 text-4xl text-gray-800">{React.createElement(icon)}</div>}
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;