import { Fragment, useState } from 'react';
import './menu.styles.css';

export default function Menu() {
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const toggleMenu = () => { 
        console.log(isMenuHidden);
        setIsMenuHidden(!isMenuHidden); 
    }

    return(
        <nav role="navigation">
        <div id="menuToggle">
        <input id="check-box" type="checkbox" />
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
          
          <ul className="menu-ul" id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#collectionPreview"><li>Collections Overview</li></a>
            <a href="#collectionView"><li>Collection</li></a>
            <a href="#contact"><li>Contact Us</li></a>
          </ul>
        </div>
      </nav>
    
    );

}