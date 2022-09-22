import { useEffect, useState } from 'react';
import { ImageGalleryItem, Button, Modal, Loader } from './index';
import useToggle from '../../hooks/useToggle';
import FetchApi from '../../services/pixabay';

const api_key = '23105457-2163ce7f6d7cdb7b080badb2a';
const newFetchApi = new FetchApi(api_key);

function ImageGallery({ queryValue }) {
  const [array, setArrey] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [modal, setModal] = useToggle(false);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    setStatus('panding');
    setArrey([]);
    newFetchApi.seachQuery = queryValue;
    newFetchApi.searchPage = 1;

    //setTimeout для затримки загрузки, щоб навмисне побачити Loader

    setTimeout(() => {
      newFetchApi
        .searchPhotos()
        .then((array) => {
          setArrey(array);
        })
        .catch((err) => {
          console.log(err);
          setStatus('error');
        });

      setStatus('success');
    }, 1000);
  }, [queryValue]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [array]);

  const loadMore = () => {
    newFetchApi.searchPage += 1;
    newFetchApi
      .searchPhotos()
      .then((newArray) => {
        setArrey([...array, ...newArray]);
      })
      .catch((err) => {
        console.log(err);
        setStatus('error');
      });
  };

  const getCurrentPhoto = (e) => {
    setPhoto(e.target.dataset.source);
  };

  return (
    <>
      {status === 'success' && (
        <>
          <ul className="ImageGallery">
            {array.map(({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                  getCurrentPhoto={getCurrentPhoto}
                  toggleModal={setModal}
                />
              );
            })}
          </ul>
          {array.length !== 0 && <Button loadMore={loadMore} />}
          {modal && <Modal photo={photo} toggleModal={setModal} />}
        </>
      )}

      {status === 'panding' && <Loader />}

      {status === 'error' && alert('Oops, something wrong')}
    </>
  );
}

export default ImageGallery;
