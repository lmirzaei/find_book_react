import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import SearchBar from './components/SearchBar';
import Pages from './pages/Pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SearchBar />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
