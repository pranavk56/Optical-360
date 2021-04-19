import './App.css';
import CollectionPreview from './Components/CollectionPreview/collectionpreview.component';
import Home from './Components/Home/home.component';
import ScrollToTop from './Components/ScrollToTop/scrolltotop.component';
import itemsArray from './Components/CollectionPreview/collectionpreview.data';

function App() {
  return (
    <div className="App">
      <Home />
      <CollectionPreview collectionItems={itemsArray}/>
      <ScrollToTop />
    </div>
  );
}

export default App;
