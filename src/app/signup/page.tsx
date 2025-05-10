'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || 'Signup failed');
      } else {
        setMessage(data.message || 'Signup is successful!');
        setShowSnackbar(true);

        setTimeout(() => {
          setShowSnackbar(false);
          router.push('/login');
        }, 3000);

        console.log('Signup worked', data.message);
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fc]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Say Where</h1>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create an Account
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Join Say Where and discover the best places to visit!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-beige-400 focus:border-beige-400 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
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
              Signup
            </button>
            {message && (
              <p className="text-sm text-red-500 mt-2 text-center">{message}</p>
            )}
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-[#f5deb3] hover:underline">
              Login
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

export default SignUpPage;
