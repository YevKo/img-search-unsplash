import { useContext } from 'react';

import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import Spinner from './components/Spinner';
import Pager from './components/Pager';
import AnimalsContext from './context/animals';

function App() {
  const { images, SearchImages, isLoading } = useContext(AnimalsContext);

  const SearchAreaContent = () => {
    if (isLoading) {
      return <div id="loading">
              <Spinner />
            </div>
    } else if (images.length === 0) {
      return <div className="noResults flex items-center justify-center pt-8 pb-8 t">
              <p> No results found </p>
            </div>
    } else {
        return <div id="photos">
          <ResultList />
          <Pager/>
        </div>
      }
  }

  return (
    <div className="main flex flex-col min-h-screen px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <header className="bg-gray-light flex flex-col items-center justify-center pt-24 pb-24 text-center">
        <h1 className="text-3xl font-bold pb-12">
          Search and download pretty pictures
        </h1>
        <SearchBar onSubmit={SearchImages} />
      </header>
      <section className="contentArea grow flex flex-col justify-center">
      { SearchAreaContent() }
      </section>
      <footer className="p-5 text-sm text-gray-600 text-center items-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 text-red-600 w-4 h-4 mr-4 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        <span>Made by Yev & <a href="https://tailwindcss.com/" target="_new" className="text-teal-600 font-semibold">tailwindcss</a></span>
      </footer>
    </div>
  );
}

export default App;
