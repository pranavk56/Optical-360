import './contact.styles.css';

export default function Contact() {

    return (
        <main className="contact">
            <h2>Contact</h2>
            <div className="contact-icons">
                <div className="contact-row-1">
                    <div className="contact-icon">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square fa-5x"></i></a>
                        <p>Facebook</p>
                    </div>
                    <div className="contact-icon">
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-5x"></i></a>
                        <p>Instagram</p>
                    </div>
                    <div className="contact-icon">
                       <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square fa-5x"></i></a>
                       <p>Twitter</p>
                    </div>
                </div>
                <div className="contact-row-2">
                    <div className="contact-icon">
                        <a target="_blank" href="https://www.google.com/maps/place/Phoenix+Marketcity+-+Viman+Nagar/@18.5528116,73.8859329,14z/data=!4m9!1m2!2m1!1sEast+Ave,+Land+mark+Garden,+Joggers+Park+Lane,+Kalyani+Nagar+East+Avenue,+Nilanjali+Housing+Colony+Pune,+Maharashtra+411006!3m5!1s0x0:0x6f7fdcc8e4d6c77e!8m2!3d18.5620613!4d73.9167451!15sCntFYXN0IEF2ZSwgTGFuZCBtYXJrIEdhcmRlbiwgSm9nZ2VycyBQYXJrIExhbmUsIEthbHlhbmkgTmFnYXIgRWFzdCBBdmVudWUsIE5pbGFuamFsaSBIb3VzaW5nIENvbG9ueSBQdW5lLCBNYWhhcmFzaHRyYSA0MTEwMDZapQEKK2Vhc3QgYXZlIGxhbmQgbWFyayBnYXJkZW4gam9nZ2VycyBwYXJrIGxhbmUidmVhc3QgYXZlIGxhbmQgbWFyayBnYXJkZW4gam9nZ2VycyBwYXJrIGxhbmUga2FseWFuaSBuYWdhciBlYXN0IGF2ZW51ZSBuaWxhbmphbGkgaG91c2luZyBjb2xvbnkgcHVuZSBtYWhhcmFzaHRyYSA0MTEwMDaSAQ9zaG9wcGluZ19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnpOM1psVlV0bkVBRQ"><i className="fas fa-map-marker-alt fa-3x"></i></a>
                        <p>East Ave, Land mark Garden, Joggers Park Lane, Kalyani Nagar East Avenue, Nilanjali Housing Colony Pune, Maharashtra 411006</p>
                    </div>
                    <div className="contact-phone">
                        <i className="fas fa-phone fa-3x"></i>
                        <br/>
                        <br/>
                        <number>+91-80599-222-88</number>
                        <br/>
                        <number>+91-80599-222-88</number>
                    </div>
                </div>
            </div>
        </main>
    )
} 