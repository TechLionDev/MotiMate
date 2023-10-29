'use client';
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase'; // Make sure to import PocketBase
import SideBar from '@/components/Sidebar';
import QuoteCard from '@/components/QuoteCard';
import Link from 'next/link';

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL

const SavedQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch saved quotes from your Pocketbase collection
        (async () => {
            try {
                const response = await pb.collection('users').getOne(pb.authStore.model.id, {
                    expand: 'savedQuotes'
                })
                console.log('Resp:', response);
                setQuotes(response?.expand?.savedQuotes ? response.expand.savedQuotes : []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching saved quotes:', error);
            }
        })();
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>{quotes.length <= 0 ? (
                        <>
                            <div class="flex flex-col justify-center items-center w-full">
                                <p className="text-3xl text-center font-bold pt-2">No Saved Quotes Yet</p>
                                <Link className='underline text-blue-600 text-lg' href='/app'>Discover Quotes!</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex max-h-screen min-h-screen h-screen w-screen min-w-screen max-w-screen'>
                                <SideBar user={pb.authStore.model} activePage={'Saved'} />
                                <div className="flex flex-col w-full lg:mb-0 mb-20">
                                    <h1 className="text-3xl text-center font-bold pt-2">Saved Quotes</h1>
                                    <ul className='overflow-y-scroll h-screen p-6'>
                                        {quotes.map((quote, index) => (
                                            <QuoteCard key={index} quote={quote} index={index}/>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }</>
            )}
        </>
    );
};

export default SavedQuotes;
