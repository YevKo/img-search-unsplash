import './App.css';
import SearchImages from './api';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import { useState } from "react";

function App() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await SearchImages(term);
    setImages(results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSubmit={handleSubmit} />
      </header>
      <div>
        <ResultList images={images} />
      </div>
    </div>
  );
}

export default App;
