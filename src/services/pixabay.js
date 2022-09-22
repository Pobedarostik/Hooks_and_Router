import axios from 'axios';

class FetchApi {
  constructor(api_key) {
    this.api_key = api_key;
    // this._seachQuery = '';
    this._searchPage = 1;
  }
  get seachQuery() {
    return this._seachQuery;
  }
  set seachQuery(value) {
    return (this._seachQuery = value);
  }

  get searchPage() {
    return this._searchPage;
  }
  set searchPage(page) {
    return (this._searchPage = page);
  }

  searchPhotos() {
    return (
      axios
        .get(
          `https://pixabay.com/api/?q=${this.seachQuery}&page=${this.searchPage}&key=${this.api_key}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then((res) => res.data.hits)
        // .then((data) => console.log(data))
        .catch((err) => console.log(err))
    );
  }

  //-------------Асинхронний запит------------------//
  // async searchPhotos() {
  //   try {
  //     const res = await axios.get(
  //       `https://pixabay.com/api/?q=${this.seachQuery}&page=${this.searchPage}&key=${this.api_key}&image_type=photo&orientation=horizontal&per_page=12`,
  //     );
  //     return res.data.hits;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}

export default FetchApi;
