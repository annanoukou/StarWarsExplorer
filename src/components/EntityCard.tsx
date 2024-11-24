import React from 'react';
import EntityDetails from './EntityDetails';
import FavoriteButton from './FavoriteButton';

const EntityCard = ({
  result,
  cachedEntity,
  handleEntityClick,
  favorites,
  handleFavoriteToggle
}: any) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
      <div onClick={() => handleEntityClick(result.url)}>
        <EntityDetails entity={cachedEntity || result} />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <FavoriteButton
          result={result}
          favorites={favorites}
          handleFavoriteToggle={handleFavoriteToggle}
        />
      </div>
    </div>
  );
};

export default EntityCard;
