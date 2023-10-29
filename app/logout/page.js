'use client';

import PocketBase from 'pocketbase'; // Make sure to import PocketBase
import { useEffect } from 'react';

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL


const LogOut = () => {
    useEffect(() => {
        (async () => {
            await pb.authStore.clear();
            window.location.href = '/';
        })();
    },[]);
    return (
        <>
        </>
    );
}

export default LogOut;