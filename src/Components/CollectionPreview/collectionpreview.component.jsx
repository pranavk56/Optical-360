import './collectionpreview.styles.css';

export default function CollectionPreview(props) {
    return (
        <main className="collection-preview">
        {
            props.collectionItems.map((elem) => {
                return (
                    <div>
                        <img src={elem.imageSource} alt={elem.alt} />
                        <div className="collection-name">
                            {elem.collectionName}
                        </div>
                    </div>
                )
            })
        }
        </main>
    )
} 