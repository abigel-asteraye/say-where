'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || 'Login failed');
      } else {
        setMessage(data.message || 'Login successful!');
        setShowSnackbar(true);

        //storing the session token in local storage
        localStorage.setItem('authToken', 'true');
        
        router.push('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fc]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Say Where</h1>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please login to your account to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-beige-400 focus:border-beige-400 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-beige-400 focus:border-beige-400 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f5deb3] text-gray-800 py-2 px-4 rounded-md hover:bg-[#e6cfa3] transition duration-200"
            >
              Login
            </button>
            {message && (
              <p className="text-sm text-red-500 mt-2 text-center">{message}</p>
            )}
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-[#f5deb3] hover:underline">
              Sign up
            </a>
          </p>
          {showSnackbar && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-md">
              {message}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
