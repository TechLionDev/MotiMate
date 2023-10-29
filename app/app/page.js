'use client';
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase'; // Make sure to import PocketBase
import SideBar from '@/components/Sidebar';
import QuoteCard from '@/components/QuoteCard';

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL

const DiscoverPage = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch quotes from your Pocketbase collection
        (async () => {
            try {
                // random num from 1 to 142
                const random = Math.floor(Math.random() * 142) + 1;
                const response = await pb.collection('quotes').getList(random, 15)
                console.log('Resp:', response);
                // shuffle response.items
                response.items.sort(() => Math.random() - 0.5);
                setQuotes(response.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        })();
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className='flex max-h-screen min-h-screen h-screen w-screen min-w-screen max-w-screen'>
                        <SideBar user={pb.authStore.model} activePage={'Discover'} />
                        <div className="flex flex-col w-full lg:mb-0 mb-20">
                            <h1 className="text-3xl text-center font-bold pt-2">Discover Quotes</h1>
                            <ul className='overflow-y-scroll h-screen p-6'>
                                {quotes.map((quote, index) => (
                                    <QuoteCard key={index} quote={quote} index={index}/>
                                ))}
                            </ul>
                        </div>
                    </div></>
            )}</>
    );
};

export default DiscoverPage;