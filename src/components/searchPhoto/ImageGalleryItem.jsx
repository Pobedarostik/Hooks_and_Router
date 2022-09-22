import React from 'react';

function ImageGalleryItem({ id, webformatURL, largeImageURL, tag, getCurrentPhoto, toggleModal }) {
  function twice(e) {
    getCurrentPhoto(e);
    toggleModal();
  }
  return (
    <li className="ImageGalleryItem" key={id} onClick={twice}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tag}
        data-source={largeImageURL}
      />
    </li>
  );
}

export default ImageGalleryItem;
