'use client';
import { useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://motivational-quotes.pockethost.io');

const QuoteCard = ({ quote, index }) => {
    const [hfillColor, sethFillColor] = useState(pb.authStore.model.savedQuotes.includes(quote.id) ? '#ffffff' : 'none');
    const saveQuote = async (quote) => {
        // if already saved, remove it
        if (pb.authStore.model.savedQuotes.includes(quote.id)) {
            await pb.collection('users').update(pb.authStore.model.id, {
                'savedQuotes-': quote.id
            })
            sethFillColor('none');
        } else {
            await pb.collection('users').update(pb.authStore.model.id, {
                'savedQuotes+': quote.id
            })
            sethFillColor('#ffffff');
        }
    }

    return (
        <>
            <div key={index} className="p-4 my-4 border border-gray-300 rounded-lg shadow-md">
                <blockquote className="text-lg italic">{quote.content}</blockquote>
                <p className="text-right text-gray-600 mt-2">- {quote.author}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                    {quote.tags.map((tag, tagIndex) => (
                        <li
                            key={tagIndex}
                            className="bg-blue-100 text-blue-700 rounded-full text-xs px-3 py-1"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => saveQuote(quote)}
                    className="mt-4 mx-2 rounded-full bg-red-500 text-white p-2 hover:bg-red-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill={hfillColor} stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default QuoteCard;