"use client"
import React from 'react'


const SearchBar = () => {
    const handleSubmit = () => {

    }
    return (
        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit} action="">
            <input
                type='text'
                placeholder='Enter product link'
                className='flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none'
            />
            <button type='submit' className='bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40'>
                Search
            </button>
        </form>
    )
}

export default SearchBar
