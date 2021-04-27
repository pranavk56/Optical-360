import './collectionpreview.styles.css';
import CollectionItem from '../CollectionItem/collectionitem.component';

export default function CollectionPreview(props) {
    return (
        <main className="collection-preview">
        {
            props.collectionItems.map((elem) => {
                return (
                    <CollectionItem data={elem} />
                )
            })
        }
        </main>
    )
} 