import "./collectionimage.styles.css";

function CollectionImage(props) {

    const {title} = props.categoriesData;
    
    return(
        <div className="collection-image">
            <h3>{title}</h3>
        </div>
    );
}

export default CollectionImage;