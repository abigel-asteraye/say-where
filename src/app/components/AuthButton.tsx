'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLoggedIn(!!token);
    }, []
    );

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        router.push('/login'); 
    };

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <div className="absolute top-4 right-4">
            {isLoggedIn ? (
                <button
                    className ="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            ) : (
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={handleLogin}
                >
                    Login
                </button>
            )}
        </div>
    );
};

export default AuthButton;
