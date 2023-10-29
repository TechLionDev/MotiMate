'use client';
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase'; // Make sure to import PocketBase
import QuoteCard from '@/components/QuoteCard';
import Fuse from 'fuse.js';
import SideBar from '@/components/Sidebar';

const pb = new PocketBase('https://motivational-quotes.pockethost.io'); // Updated URL

const QuoteSearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [quotes, setQuotes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    // Combine content, author, and tags into a single search field
    const combineFields = (quote) => {
        return `${quote.content} ${quote.author} ${quote.tags.join(' ')}`.toLowerCase();
    };

    useEffect(() => {
        // Fetch all quotes from your Pocketbase collection
        const fetchQuotes = async () => {
            try {
                const response = await pb.collection('quotes').getList(1, 100); // Fetch a larger number of quotes
                setQuotes(response.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching quotes:', error);
                setLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            // Create a Fuse instance for fuzzy searching quotes
            const fuseOptions = {
                keys: ['combinedFields'], // Use a single field for searching
                includeScore: true,
                threshold: 0.4, // Adjust the threshold as needed
            };

            const quotesWithCombinedFields = quotes.map(quote => ({
                ...quote,
                combinedFields: combineFields(quote),
            }));

            const fuse = new Fuse(quotesWithCombinedFields, fuseOptions);

            // Perform the fuzzy search
            const results = fuse.search(searchQuery);

            // Extract the items from the results
            const matchedQuotes = results.map(result => result.item);

            setSearchResults(matchedQuotes);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, quotes]);


    return (
        <div className='flex'>
            <SideBar user={pb.authStore.model} activePage={'Search'} />
            <div class="flex flex-col p-6 w-full lg:mb-0 mb-20">
                <h1 className="text-2xl font-bold">Quote Search</h1>
                <div className="my-4">
                    <input
                        type="text"
                        placeholder="Search for quotes"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    searchResults.map((quote, index) => (
                        <QuoteCard key={index} quote={quote} index={index} />
                    ))
                )}
            </div>
        </div>
    );
};

export default QuoteSearchPage;
