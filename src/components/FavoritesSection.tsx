import React from 'react';

const FavoritesSection = ({ favorites, handleFavoriteToggle }: any) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-9">
        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet!</p>
        ) : (
          favorites.map((favorite: any, index: number) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg font-medium">{favorite.name || favorite.title}</p>
              <button
                className="mt-2 text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                onClick={() => handleFavoriteToggle(favorite)}
              >
                Unfavorite
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FavoritesSection;
