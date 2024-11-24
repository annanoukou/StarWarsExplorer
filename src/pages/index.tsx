import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

// Component for handling search and displaying results/details
const Home = () => {

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-stars-layer opacity-30 animate-stars"></div>
        <div className="w-full h-full bg-stars-layer opacity-50 animate-stars2"></div>
        <div className="w-full h-full bg-stars-layer opacity-80 animate-stars3"></div>
      </div>
      
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-yellow-500 tracking-wide mt-20">Star Wars Search</h1>
        <p className="text-lg text-gray-300 mt-2">Search for Characters, Planets, Starships and more!</p>
      </header>

      {/* Search Bar Section */}
      <SearchBar />

      <div className="relative z-10 mt-10">
        {/* Search Results Section */}
        <div>
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default Home;
