import React from 'react';
import EntityCard from './EntityCard';

const SearchResultsSection = ({
  results,
  detailsCache,
  handleEntityClick,
  favorites,
  handleFavoriteToggle
}: any) => {
  return (
    <>
      {results.length === 0 ? (
        <p className="text-center text-gray-500">No results found. Try searching for something else.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result: any, index: number) => {
            const cachedEntity = detailsCache[result.url];
            return (
              <EntityCard
                key={index}
                result={result}
                cachedEntity={cachedEntity}
                handleEntityClick={handleEntityClick}
                favorites={favorites}
                handleFavoriteToggle={handleFavoriteToggle}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchResultsSection;
