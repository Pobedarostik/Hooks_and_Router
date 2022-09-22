import React from 'react';
import { useState } from 'react';
import { Searchbar, ImageGallery } from '../searchPhoto';

function SearchPhoto() {
  const [queryValue, setqueryValue] = useState('');

  const handleSubmit = (data) => {
    setqueryValue(data);
  };
  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery queryValue={queryValue} />
    </div>
  );
}

export default SearchPhoto;
