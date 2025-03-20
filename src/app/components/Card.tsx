import React from "react";
import Link from "next/link";

interface CardProps {
    href: string;
    title: string;
};

const Card: React.FC<CardProps> = ({ href, title }) => {
    return (
        <Link href={href}>
            <div className="p-6 bg-[#fdf1e4] border border-gray-300 shadow-md rounded-xl text-center cursor-pointer hover:shadow-lg transition duration-200">
                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            </div>
        </Link>
    );
};

export default Card;
