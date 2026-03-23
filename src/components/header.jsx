import './header.css'

export default function HotelHeader(){
    return(
        <>
            <header className="hotel-header">
                <div className="hotel-header-container">
                    {/* Left: Logo Section */}
                    <div className="hotel-logo-section">
                        <div className="hotel-logo">
                            <img src="https://www.choicehotels.com/assets/57e477d8570380cbd9a763dfc161a2e8-sleep-inn-AS-TM.svg" alt="Sleep Inn & Suites" />
                        </div>
                    </div>

                    {/* Middle: Hotel Info Section (Centered) */}
                    <div className="hotel-main-info">
                        <h1 className="hotel-title">Sleep Inn & Suites Searcy near University</h1>
                        
                        <div className="hotel-meta-details">
                            <div className="hotel-rating-location-phone">
                                <div className="hotel-rating">
                                    <span className="hotel-stars">★★★★★</span>
                                    <span className="hotel-rating-score">4.7</span>
                                    <span className="hotel-reviews">(18 reviews)</span>
                                </div>
                                
                                <div className="hotel-location">
                                    📍 1200 Truman Baker Drive, Searcy, AR, 72143, US
                                </div>
                                
                                <div className="hotel-phone">
                                    📞 (501) 254-0074
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Button Section */}
                    <div className="hotel-price-container">
                        <button className="hotel-view-rooms-btn">View Rooms</button>
                    </div>
                </div>
            </header>
        </>
    )
}