'use client';
import React, { useState } from 'react';
import PocketBase from 'pocketbase'; // Make sure to import PocketBase
import { useRouter } from 'next/navigation'; // Import the useRouter

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // Added name for signup
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState(''); // Added passwordConfirm for signup
  const router = useRouter(); // Initialize the router

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async () => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);

      // Check if authentication was successful
      if (authData) {
        router.push('/app');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async () => {
    try {
      if (password !== passwordConfirm) {
        console.error("Password and password confirmation do not match.");
        return;
      }

      const newUser = {
        email,
        name,
        password,
        passwordConfirm,
      };

      await pb.collection('users').create(newUser);

      // After successful signup, you can log the user in or set the authStore data here
      await pb.collection('users').authWithPassword(email, password);

      // Redirect to the home page
      router.push('/app');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-gray-900">
        {isLogin ? 'Login to MotiMate' : 'Sign Up for MotiMate'}
      </h1>
      <div className="max-w-md mx-auto mt-8">
        <div className={isLogin ? '' : 'hidden'}>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Email</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={isLogin ? 'hidden' : ''}>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Email</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full inline-block hover:bg-blue-600 transition duration-300 mr-4"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <button
          className="bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full inline-block hover-bg-gray-400 transition duration-300"
          onClick={handleToggleMode}
        >
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}

export default AuthPage;