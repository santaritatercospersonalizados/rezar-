import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        {/* Cruz */}
        <rect x="18" y="10" width="4" height="20" fill="currentColor" />
        <rect x="10" y="18" width="20" height="4" fill="currentColor" />
        {/* Contas do terço em círculo */}
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="5" r="2" fill="currentColor" />
        <circle cx="35" cy="20" r="2" fill="currentColor" />
        <circle cx="20" cy="35" r="2" fill="currentColor" />
        <circle cx="5" cy="20" r="2" fill="currentColor" />
      </svg>
      <span className="text-xl font-serif text-gold">Terços Santa Rita</span>
    </div>
  );
};

export default Logo;