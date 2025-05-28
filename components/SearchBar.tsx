"use client"
import { scrapAndStoreProduct } from '@/lib/actions'
import React, { FormEvent, useState } from 'react'


const SearchBar = () => {
    const [searchPrompt, setSearchPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const isValidAmazonProductURL = (url: string) => {
        try {
            const parsedURL = new URL(url);
            const hostname = parsedURL.hostname;

            // check if it amazon sites
            if (
                hostname.includes('amazon.com') ||
                hostname.includes('amazon.') ||
                hostname.includes('amazon')
            ) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt)
        if (!isValidLink) {
            return alert("Please enter a valid Amazon product link");
        }

        // if link is valid

        try {
            setIsLoading(true);
            // scrape the product details
            const product = await scrapAndStoreProduct(searchPrompt)

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit} action="">
            <input
                type='text'
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder='Enter product link'
                className='flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none'
            />
            <button
                type='submit'
                className='bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40'
                disabled={searchPrompt === ''}
            >
                {isLoading ? "Searching..." : "Search"}
            </button>

        </form>
    )
}

export default SearchBar
