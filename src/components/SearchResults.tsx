import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailsCache } from '../redux/slices/searchSlice';
import { RootState } from '../redux/store';
import EntityDetails from './EntityDetails';
import FavoritesSection from './FavoritesSection';
import SearchResultsSection from './SearchResultsSection';

const SearchResults = () => {
  const { results, detailsCache, loading, error } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState<any[]>([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  // Handle adding/removing an entity from favorites
  const handleFavoriteToggle = (entity: any) => {
    let updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex((favorite) => favorite.url === entity.url);
    if (index === -1) {
      updatedFavorites.push(entity); // Add to favorites
    } else {
      updatedFavorites.splice(index, 1); // Remove from favorites
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Fetch entity details if not cached
  const handleEntityClick = async (url: string) => {
    if (!detailsCache[url]) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setDetailsCache({ url, data }));
      } catch (err) {
        alert('Failed to fetch details.');
      }
    }
  };

  if (loading) return <div className="flex justify-center items-center p-8 text-yellow-500">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <FavoritesSection
        favorites={favorites}
        handleFavoriteToggle={handleFavoriteToggle}
      />
      <SearchResultsSection
        results={results}
        detailsCache={detailsCache}
        handleEntityClick={handleEntityClick}
        favorites={favorites}
        handleFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default SearchResults;
