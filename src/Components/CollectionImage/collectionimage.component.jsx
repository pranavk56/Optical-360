import React, { useEffect, useState } from 'react';
import "./collectionimage.styles.css";

function CollectionImage(props) {

    const {title, imagePath} = props.categoriesData;
    const [image, setImage] = useState();

    useEffect(() => {
        import(`../../Assets/spectacles/${imagePath}`).then(setImage)
    }, [imagePath])

    

    return(
        <div className="collection-image">
            <h3>{title}</h3>
            {/* <img src={image} height="100" width="100" alt=""/> */}

             {image ? <img src={image.default} alt="" /> : 'Loading....'}
        </div>
    );
}

export default CollectionImage;