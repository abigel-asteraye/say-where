import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { homeLinks } from "../data/homeLinks"; 


const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf1e4] py-10 px-4">
            <Navbar /> 

            <div className="mt-8 bg-[#fdf1e4] rounded-2xl shadow-lg p-10 text-center border border-gray-300">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Say Where?</h1>

                <p className="text-lg text-gray-800">
                    Say Where? is a simple app that helps you find places to go. 
                    Whether you're looking for a place to eat, study, or just hang out, 
                    Say Where? has you covered.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                {homeLinks.map((link, index) => (
                    <Card key={index} title={link.title} href={link.href} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
