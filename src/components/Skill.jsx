import React from 'react';

const Skill = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{skill}</span>
        <span className="text-gray-500">{level}</span>
      </div>
      <div className="relative pt-1">
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
          <div style={{ width: level }} className="flex flex-col justify-center bg-green-500 transition-width duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
