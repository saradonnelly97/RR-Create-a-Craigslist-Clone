// Import data
import Gallery from './Gallery';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
// Import components
import './App.css';

function App(){
  return (
      <div className = 'gallery'>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <Gallery />
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
