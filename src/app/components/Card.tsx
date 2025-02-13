import React from "react";
import Link from "next/link";

interface CardProps {
    href: string;
    title: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ href, title, description }) => {
    return (
        <Link href={href}>
            <div className="p-6 bg-whiteshadow-md rounded-xl text-center cursor-pointer hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
        </Link>
    );
};

export default Card;