'use client';
import Link from 'next/link';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in using your authentication method
    const checkIsLoggedIn = () => {
      // You may have your own logic to check if the user is logged in
      // For example, checking the authStore or the presence of an auth token
      const authData = pb.authStore;
      if (authData.isValid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkIsLoggedIn();
  }, []);

  return (
    <nav className="bg-blue-500 drop-shadow-lg rounded-xl mx-4 z-50 p-4 m-2 sticky top-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-xl font-semibold" href="/">
          MotiMate
        </Link>
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <Link className="text-white rounded-lg bg-blue-700 p-4" href="/app">
              Go To App
            </Link>
          ) : (
            <>
              <Link className="text-white p-4" href="/about">
                About
              </Link>
              <Link className="text-white rounded-lg bg-blue-700 p-4" href="/auth">
                Login / Signup
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
