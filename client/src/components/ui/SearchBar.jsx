import React, { useState } from 'react';
import axiosInstance from '@/utils/axios';
import { usePlaces } from '../../../hooks';

const SearchBar = () => {
  const Places = usePlaces();
  const { setPlaces, setLoading } = Places;

  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    if (searchText.trim() !== '') {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(`/places/search/${searchText.trim()}`);
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-white shadow-sm hover:shadow-lg md:w-1/2">
        <div className="grow">
          <input
            type="search"
            placeholder="Where you want to go?"
            className="h-full w-full border-none py-2 px-4 text-sm bg-white text-black focus:outline-none md:text-lg" // Changed bg color to white and text color to black
            onChange={(e) => setSearchText(e.target.value)} // Only update state
            value={searchText}
          />
        </div>
        <div className="flex cursor-pointer items-center text-black"> {/* Keep text color black for button */}
          <button
            className="flex rounded-r-full py-2 px-4 md:p-2"
            onClick={handleSearch} // Trigger search on button click only
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="mt-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="ml-1 hidden md:block">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
