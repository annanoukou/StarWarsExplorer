import React from 'react';
import { Entity } from '../types/entities';

interface EntityDetailsProps {
  entity: Entity;
}

const EntityDetails = ({ entity }: EntityDetailsProps) => {
  const renderDetails = () => {
    if ('height' in entity) {
      return (
        <>
          <p className="text-gray-300">Height: <span className="text-white">{entity.height}</span></p>
          <p className="text-gray-300">Mass: <span className="text-white">{entity.mass}</span></p>
          <p className="text-gray-300">Gender: <span className="text-white">{entity.gender}</span></p>
          <p className="text-gray-300">Birth Year: <span className="text-white">{entity.birth_year}</span></p>
        </>
      );
    } else if ('climate' in entity) {
      return (
        <>
          <p className="text-gray-300">Climate: <span className="text-white">{entity.climate}</span></p>
          <p className="text-gray-300">Population: <span className="text-white">{entity.population}</span></p>
          <p className="text-gray-300">Terrain: <span className="text-white">{entity.terrain}</span></p>
        </>
      );
    } else if ('model' in entity) {
      return (
        <>
          <p className="text-gray-300">Model: <span className="text-white">{entity.model}</span></p>
          <p className="text-gray-300">Manufacturer: <span className="text-white">{entity.manufacturer}</span></p>
          <p className="text-gray-300">Cost: <span className="text-white">{entity.cost_in_credits}</span></p>
          <p className="text-gray-300">Crew: <span className="text-white">{entity.crew}</span></p>
        </>
      );
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg transition-transform duration-300">
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">{entity.name}</h2>
      <div className="space-y-2">{renderDetails()}</div>
    </div>
  );
};

export default EntityDetails;
