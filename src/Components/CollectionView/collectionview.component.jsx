
import './collectionview.styles.css';
import CollectionViewItem from '../CollectionViewItem/collectionviewitem.component';
import COLLECTION_ARRAY from '../../data/collectionarray.data';

export default function CollectionView() {

    return (
        <main className="collection-view">
        {
            COLLECTION_ARRAY.map((elem, i) => {
                return (
                    <div id={elem.id}>
                            <CollectionViewItem collectionData={elem} key={i} />
                    </div>
                )    
            })
        }
        </main>
    )
} 