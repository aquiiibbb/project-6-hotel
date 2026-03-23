import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            {/* TOP NAV */}
            <div className="footer-top">
                <div className="footer-logo">
                   <img src="https://www.choicehotels.com/assets/4e4b6b1367b8589e994436967857a102-choice-hotels.svg" alt="Choice Hotels" />
                </div>

                <div className="footer-nav">
                    <span>Find a Hotel</span>
                    <span>Reservations</span>
                    <span>Choice Privileges</span>
                    <span>Help</span>
                </div>
            </div>

            {/* LINE */}
            <div className="footer-line"></div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <div className="legal-links">
                    <span>Terms of Use</span>
                    <span>Privacy and Security Policy</span>
                    <span>Interest-Based Ads</span>
                    <span>Imprint</span>
                    <span>Legal Notice</span>
                </div>

                <div className="copyright">
                    © 2026 Choice Hotels International, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}