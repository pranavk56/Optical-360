import './App.css';
import CollectionPreview from './Components/CollectionPreview/collectionpreview.component';
import Home from './Components/Home/home.component';
import ScrollToTop from './Components/ScrollToTop/scrolltotop.component';
import ITEMS_ARRAY from './data/collectionpreview.data';
import CollectionView from './Components/CollectionView/collectionview.component';
import Contact from './Components/Contact/contact.component';
import Menu from "./Components/Menu/menu.component";

function App() {
  return (
    <div className="App">
       <Menu />
      <Home />
      <CollectionPreview collectionItems={ITEMS_ARRAY}/>
      <CollectionView />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
