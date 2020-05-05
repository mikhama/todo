import React from 'react';

const SearchPanel = () => {
  const placeholder = 'Search what to do';
  const style = {
    fontSize: '20px',
  };

  return (
    <input
      style={style}
      placeholder={placeholder}
    />
  );
};

export default SearchPanel;
