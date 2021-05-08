import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import CollectionImage from '../../Components/CollectionImage/collectionimage.component';
import './collectionviewitem.styles.css';

export default function CollectionViewItem({collectionData}) {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const childrenArray = collectionData.dataArray.map((element, i) => <CollectionImage key={i} categoriesData={element} />);

    const changeActiveItem = (activeItemIndex) => {
        setActiveItemIndex(activeItemIndex)
    };

    return (
        <div className="collection-view-item">
            <h2>{collectionData.collectionName}</h2>
            <div className="carousel-container">
                <ItemsCarousel
                    //Placeholder config
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={3}
                    gutter={12}
                    showSlither={true}
                    firstAndLastGutter={false}
                    freeScrolling={true}

                    //Active Item Configuration
                    requestToChangeActive={changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    chevronWidth={50}
                    rightChevron= {<div className="right-chevron"><i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i></div>}
                    leftChevron={<div className="left-chevron"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i></div>}
                    outsideChevron={false}
                    infiniteLoop={true}
                >
                    {childrenArray}
                </ItemsCarousel>
      </div>
        </div>
    )
} 