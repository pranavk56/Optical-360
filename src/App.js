import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home.component';
import ScrollToTop from './Components/ScrollToTop/scrolltotop.component';
import CollectionPreview from './Components/CollectionPreview/collectionpreview.component';

function App() {
  return (
    <div className="App">
      <Home />
      <CollectionPreview />
      <ScrollToTop />
    </div>
  );
}

export default App;
