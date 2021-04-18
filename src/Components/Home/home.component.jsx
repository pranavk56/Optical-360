import './home.styles.css';

export default function Home() {

    return (
        <div className="home">
            <h1 className="header"><img src="LogoFinal2.png" alt="1" height="100" width="100"/><sup>ptical 360</sup><sup>°</sup></h1>
            <div className="image-container">
                <div id="image-div-1" className="image-div">
                    <img src="spec5.jpg" alt="1"/>
                    <p>
                        <center><i class="fa fa-mobile-alt  fa-3x" aria-hidden="true"></i></center><br/>
                        Every <strong>6.5 mins</strong> people check their phones 
                    </p>
                </div>
                <div id="image-div-2" className="image-div">
                    <p style={{ color: "lightgray" }}>
                        <center><i class="fa fa-tv fa-3x" aria-hidden="true"></i></center><br/>
                        <strong>9 hours</strong> each day of extended screen time 
                    </p>
                    <img src="spec4.jpg" alt="2"/>
                </div>
                <div id="image-div-3" className="image-div">
                    <img src="spec6.jpg" alt="3"/>
                    <p>
                        <center><i class="fa fa-moon fa-3x" aria-hidden="true"></i></center><br/>
                        <strong>1 hour</strong> sleep loss<br/>
                        Screentime before bed means a restless night 
                    </p>
                </div>
                <h2>
                    Find relief with <a href="#">Digital Screen Protect Glasses</a>
                </h2>
            </div>
        </div>


    )
} 