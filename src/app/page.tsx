import React from "react";
import Card from "../app/components/Card";
import { homeLinks } from "../app/data/homeLinks";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 py-2">
          
            <h1 className="text-4xl font-bold mb-6 text-center">Say Where?</h1>
            <p className="text-lg text-gray-600 mb-4 text-center max-w-lg">
                Discover the best spots in our little South Hadley!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {homeLinks.map((link, index) => (
                    <Card key={link.title} title={link.title} description={link.description} href={link.href} />
                ))}
            </div>
        </div>
    );
}; 

export default HomePage;

