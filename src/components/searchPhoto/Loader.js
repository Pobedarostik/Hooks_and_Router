// import { Audio } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="Loader">
      <Circles
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
