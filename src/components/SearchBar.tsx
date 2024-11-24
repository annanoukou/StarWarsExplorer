import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setEntityType, setLoading, setResults, setError } from '../redux/slices/searchSlice';
import { RootState } from '../redux/store';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { query, entityType } = useSelector((state: RootState) => state.search);

  // Handle the search query and entity type
  const handleSearch = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`/api/search?entityType=${entityType}&query=${query}`);
      const data = await response.json();
      dispatch(setResults(data || []));
    } catch (error) {
      dispatch(setError('Failed to fetch data.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between z-10">
      {/* Dropdown for entity type */}
      <div className="sm:order-1 w-full sm:w-auto">
        <select
          className="w-full p-4 bg-gray-800 text-yellow-500 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          value={entityType}
          onChange={(e) => dispatch(setEntityType(e.target.value))}
        >
          <option value="people">Characters</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
      </div>

      {/* Search input and button */}
      <div className="flex flex-col sm:flex-row w-full sm:gap-4 sm:order-2">
        <input
          type="text"
          className="p-4 flex-grow bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search..."
        />
        <button
          className="p-4 mt-4 sm:mt-0 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
