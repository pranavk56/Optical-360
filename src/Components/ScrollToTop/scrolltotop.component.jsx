import './scrolltotop.styles.css';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export default function ScrollToTop() {

    const [isPageScrolled, setIsPageScrolled] = useState(false)

    useScrollPosition(({ prevPos, currPos }) => {
            const isShow = currPos.y < prevPos.y || currPos.y !== 0;
            if (isShow !== isPageScrolled) {
                setIsPageScrolled(isShow)
            }
        },
        [isPageScrolled],
        false,
        false,
        300
    )

    function onScrollTopClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <div className="scroll-to-top" style={isPageScrolled ? { display: "block" } : { display: "none" }}>
            <button type="button" onClick={onScrollTopClick}>
                <i class="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
            </button>
        </div>
    )
}