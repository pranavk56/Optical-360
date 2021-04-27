import './collectionitem.styles.css';

export default function CollectionItem(props) {

    const scrollDown = (e) => {
        console.log(e)
        e.preventDefault();
        // Scroll to a certain element
        document.querySelector(`#${e.target.innerHTML.toLowerCase()}-item`).scrollIntoView({ 
            behavior: 'smooth' 
        })
    }

    return (
        <div className="collection-item">
            <img src={props.data.imageSource} alt={props.data.alt} />
            <div className="collection-name" onClick={scrollDown}>
                {props.data.collectionName}
            </div>
        </div>
    )
} 