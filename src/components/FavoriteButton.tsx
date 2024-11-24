import React from 'react';

const FavoriteButton = ({ result, favorites, handleFavoriteToggle }: any) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white transition-colors duration-300 ${
        favorites.some((fav: any) => fav.url === result.url)
          ? 'bg-yellow-500 hover:bg-yellow-600'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      onClick={() => handleFavoriteToggle(result)}
    >
      {favorites.some((fav: any) => fav.url === result.url) ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
