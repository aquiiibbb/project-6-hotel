import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Amenities from "./aminities.jsx";
import Room1 from './room1.jsx'; // Import Room1 component
import Room2 from './room2.jsx';
import './room2.css';
export default function Home() {
    const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
    const [showMobileNavigation, setShowMobileNavigation] = useState(false);
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);

    // Room1 Modal States - MOVED TO TOP LEVEL
    const [isRoom1Open, setIsRoom1Open] = useState(false);
    const [isRoom2Open, setIsRoom2Open] = useState(false);
    // Functions add karo
    const openRoom2Modal = () => {
        setIsRoom2Open(true);
        document.body.style.overflow = 'hidden';
    };

    const closeRoom2Modal = () => {
        setIsRoom2Open(false);
        document.body.style.overflow = 'unset';
    };
    const openRoom1Modal = () => {
        setIsRoom1Open(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeRoom1Modal = () => {
        setIsRoom1Open(false);
        document.body.style.overflow = 'unset'; // Restore scroll
    };

    const navigate = useNavigate();

    // Close mobile navigation on window resize
    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                setShowMobileNavigation(false);
                setShowMobileSubmenu(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // Prevent body scroll when mobile navigation is open
    useEffect(() => {
        if (showMobileNavigation) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMobileNavigation]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navigation-dropdown')) {
                setShowDesktopDropdown(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'guest-rooms', 'amenities', 'location', 'info', 'reviews', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDesktopDropdown = () => {
        setShowDesktopDropdown(!showDesktopDropdown);
    };

    const toggleMobileNavigation = () => {
        setShowMobileNavigation(!showMobileNavigation);
    };

    const toggleMobileSubmenu = () => {
        setShowMobileSubmenu(!showMobileSubmenu);
    };

    const closeMobileNavigation = () => {
        setShowMobileNavigation(false);
        setShowMobileSubmenu(false);
    };

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Navigate to gallery
    const handleAllPhotos = () => {
        navigate('/gallery');
    };

    return (
        <>
            {/* ============================ */}
            <section className="hotel-preview-wrapper">

                {/* ============================ */}
                <div className="hotel-preview">
                    <div className="preview-left">
                        <img
                            src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true"
                            alt="Hotel Room"
                        />
                    </div>

                    <div className="preview-right">
                        <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior3.jpg?webp=true" alt="" />
                        <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" alt="" />
                        <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior1.jpg?webp=true" alt="" />

                        <div className="preview-last">
                            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" />
                            <button onClick={handleAllPhotos}>📷 All photos</button>
                        </div>
                    </div>
                </div>

                {/* Sticky Navigation Bar */}
                <div className="sticky-nav">
                    <div className="sticky-nav-container">
                        <button
                            className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
                            onClick={() => scrollToSection('overview')}
                        >
                            📋 Overview
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'guest-rooms' ? 'active' : ''}`}
                            onClick={() => scrollToSection('guest-rooms')}
                        >
                            🛏️ Guest Rooms
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'amenities' ? 'active' : ''}`}
                            onClick={() => scrollToSection('amenities')}
                        >
                            🏊 Amenities
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'location' ? 'active' : ''}`}
                            onClick={() => scrollToSection('location')}
                        >
                            📍 Location
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'info' ? 'active' : ''}`}
                            onClick={() => scrollToSection('info')}
                        >
                            ℹ️ Info
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'reviews' ? 'active' : ''}`}
                            onClick={() => scrollToSection('reviews')}
                        >
                            ⭐ Reviews
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                        >
                            📞 Contact Us
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="overview-container">
                    <div className="overview-section" id="overview">

                        {/* LEFT SIDE */}
                        <div className="overview-left">
                            <p className="tag">OVERVIEW</p>

                            <h2>
                                Enjoy a simply stylish stay in <br />
                                Searcy
                            </h2>

                            <p className="desc">
                                Welcome to the newly renovated Sleep Inn & Suites® Searcy near University hotel,
                                where we've cultivated a welcoming stay for both business and leisure travelers
                                right off I-57 near local attractions. Our nature-inspired Designed to Dream®
                                property provides a serene retreat thanks to amenities like free WiFi and a
                                complimentary hot breakfast each morning, while our fitness center and business
                                center allow you to stay in touch with your routines. Plus, students and visitors
                                appreciate our proximity to Harding University and Arkansas State University
                                Beebe, Searcy Campus.
                            </p>

                            <a href="#" className="read-more">Read More</a>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="overview-right-wrapper">
                            <div className="overview-right">

                                <h3>Highlights</h3>

                                <div className="highlights-grid">

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🏊</div>
                                        <div>
                                            <span>Indoor Heated Pool</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">💪</div>
                                        <div>
                                            <span>Fitness Center</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">☕</div>
                                        <div>
                                            <span>Free Hot Breakfast</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🛡️</div>
                                        <div>
                                            <span>Government Travelers: FEMA Approved</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🚚</div>
                                        <div>
                                            <span>Truck Parking</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🕐</div>
                                        <div>
                                            <span>Check in / out</span>
                                            <small>15:00 / 11:00</small>
                                        </div>
                                    </div>

                                </div>

                                <button
                                    className="amenities-btn"
                                    onClick={() => setShowAmenitiesModal(true)}
                                >
                                    View all amenities
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

                {/* ============================ */}
                <div className="guest-rooms-section" id="guest-rooms">
                    <div className="rooms-header">
                        <div className="rooms-title">
                            <p className="tag guest-rooms">GUEST ROOMS</p>
                            <h2>Available Guest Rooms</h2>
                        </div>

                        <div className="rooms-controls">
                            <div className="room-filters">
                                <span className="filter-item active">🟢 Advance book 30%</span>
                                <span className="filter-item">🟢 Advance book 14 days</span>
                                <span className="filter-item">🟢 Pay now and save 10% off BAR</span>
                            </div>

                            <div className="view-controls">
                                <button className="view-btn active">Grid</button>
                                <button className="view-btn">List</button>
                            </div>
                        </div>
                    </div>

                    <div className="room-selection-filters">
                        <button className="filter-btn active">All rooms</button>
                        <button className="filter-btn">1 bed</button>
                        <button className="filter-btn">2+ beds</button>
                    </div>

                    <div className="rooms-grid">
                        {/* Room 1 - With Modal */}
                        <div className="room-card">
                            <div className="room-image" onClick={openRoom1Modal} style={{ cursor: 'pointer' }}>
                                <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true" alt="1 King Bed Room" />
                                <span className="room-count">5</span>
                                <div className="image-overlay">
                                    <span className="view-photos">View Details</span>
                                </div>
                            </div>

                            <div className="room-details">
                                <h3>1 King Bed, Nonsmoking</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 1 King Bed</span>
                                    <span className="spec">👥 No Smoking</span>
                                    <span className="spec">📐 300 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• Microwave</span>
                                        <span>• 32-inch TV with cable/satellite</span>
                                        <span>• Air conditioning</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• Coffee maker with coffee</span>
                                        <span>• Desk with ergonomic chair</span>
                                        <span>• Free WiFi</span>
                                    </div>
                                </div>

                                <button className="room-details-btn" onClick={openRoom1Modal}>Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$94</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>

                        {/* Room 2 */}
                        <div className="room-card">
                            <div className="room-image" onClick={openRoom2Modal} style={{ cursor: 'pointer' }}>
                                <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior3.jpg?webp=true" alt="2 Queen Beds Room" />
                                <span className="room-count">3</span>
                                <div className="image-overlay">
                                    <span className="view-photos">View Details</span>
                                </div>
                            </div>

                            <div className="room-details">
                                <h3>2 Queen Beds, Nonsmoking</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 2 Queen Beds</span>
                                    <span className="spec">👥 No Smoking</span>
                                    <span className="spec">📐 300 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• Microwave</span>
                                        <span>• 32-inch TV with cable/satellite</span>
                                        <span>• Air conditioning</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• Coffee maker with coffee</span>
                                        <span>• Desk with ergonomic chair</span>
                                        <span>• Free WiFi</span>
                                    </div>
                                </div>

                                <button className="room-details-btn" onClick={openRoom2Modal}>Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$98</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>

                        {/* Room2 Modal */}
                        <Room2 isOpen={isRoom2Open} onClose={closeRoom2Modal} />

                        {/* Room 3 */}
                        <div className="room-card">
                            <div className="room-image">
                                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" alt="1 King Bed Suite" />
                                <span className="room-count">2</span>
                            </div>

                            <div className="room-details">
                                <h3>1 King Bed, Nonsmoking</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 1 King Bed</span>
                                    <span className="spec">👥 No Smoking</span>
                                    <span className="spec">📐 350 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• 1 king bed with sofa bed</span>
                                        <span>• 32-inch TV with cable/satellite</span>
                                        <span>• Air conditioning</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• Mini refrigerator</span>
                                        <span>• Desk with ergonomic chair</span>
                                        <span>• Free WiFi</span>
                                    </div>
                                </div>

                                <button className="room-details-btn">Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$112</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room1 Modal */}
                <Room1 isOpen={isRoom1Open} onClose={closeRoom1Modal} />
                {/* ============================ */}
                <div className="amenities-section" id="amenities">
                    <div className="amenities-left">
                        <p className="tag">AMENITIES</p>
                        <h2>Featured Amenities <span>(12)</span></h2>

                        <div className="amenities-list">
                            <div className="amenity-item">
                                <span className="amenity-icon">🏊</span>
                                <span>Indoor Heated Pool</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">💪</span>
                                <span>Fitness Center</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🛗</span>
                                <span>Elevator(s)</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🛡️</span>
                                <span>Government Travelers: FEMA Approved</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">☕</span>
                                <span>Free Hot Breakfast</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚭</span>
                                <span>100% Smoke Free Hotel</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🅿️</span>
                                <span>Free Parking</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚚</span>
                                <span>Truck Parking</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚫</span>
                                <span>No Pets Allowed Only service animals are permitted, free of charge.</span>
                            </div>
                        </div>

                        <button className="amenities-btn-dark" onClick={() => setShowAmenitiesModal(true)}>
                            View all amenities
                        </button>
                        <p className="note">*May require an additional cost</p>
                    </div>

                    <div className="amenities-right">
                        <img
                            src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=80"
                            alt="Amenities"
                        />
                    </div>
                </div>

                {/* ============================ */}
                <div className="location-section" id="location">
                    <p className="tag">LOCATION</p>
                    <h2>Discover the charm of Searcy, AR</h2>

                    <iframe
                        src="https://www.google.com/maps?q=Searcy,Arkansas&output=embed"
                        width="100%"
                        height="380"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="map"
                    ></iframe>
                </div>

                {/* ============================ */}
                <div className="nearby-section">

                    {/* LEFT */}
                    <div className="nearby-left">
                        <h4>Find us</h4>
                        <p><b>1200 Truman Baker Drive, Searcy, AR, 72143, US</b></p>

                        <p>
                            Our hotel in Searcy, AR, is located off I-57 next to restaurants, shops and attractions. Harding University and Arkansas State University Beebe, Searcy Campus are both accessible within minutes, while Searcy Regional Airport is under five miles away. You can enjoy scenic activities at Riverside Park along the Little Red River or immerse yourself in interactive history at Pioneer Village. If you're traveling with a team, Searcy Sports Complex is just three miles from our hotel. Searcy is also home to a variety of businesses and companies, making us an ideal destination for professional travelers. Everything you need for a successful stay is within reach.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="nearby-right">
                        <h3>What's nearby</h3>

                        <div className="nearby-grid">

                            {/* Dining */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">🍴</div>
                                    <h5>Dining/Bars</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Rock House</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Chilis</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Texas Roadhouse</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Fuji Japanese Steakhouse</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Greek House</span>
                                    <small>0.8 km</small>
                                </div>
                            </div>

                            {/* Attractions */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">📍</div>
                                    <h5>Attractions</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Searcy Sport Complex</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Pioneer Village</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>White County Fairground</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Riverside Park</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>River Oaks Golf Course</span>
                                    <small>1.61 km</small>
                                </div>
                            </div>

                            {/* Business */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">🏢</div>
                                    <h5>Business</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Walmart Distribution</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Harding University</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Turkey Hill Dairy</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Sams Distribution Center</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Land O Frost</span>
                                    <small>1.61 km</small>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* ============================ */}
                <div className="info-section" id="info">
                    <p className="tag">INFO</p>
                    <h2>Essential details</h2>

                    <div className="info-grid">

                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div>
                                <h4>Check-In</h4>
                                <p>15:00</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div>
                                <h4>Check-Out</h4>
                                <p>11:00</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🚭</div>
                            <div>
                                <h4>No Smoking</h4>
                                <p>100% Smoke Free Hotel</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div>
                                <h4>Phone Number</h4>
                                <p>(501) 254-0074</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">👶</div>
                            <div>
                                <h4>Children</h4>
                                <p>Stay free under 18</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🏢</div>
                            <div>
                                <h4>Office Hours</h4>
                                <p>24/7</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🐾</div>
                            <div>
                                <h4>Pets</h4>
                                <p>No pets allowed</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ============================ */}
                <div className="reviews-section" id="reviews">
                    <div className="reviews-header">
                        <div>
                            <p className="tag">REVIEWS</p>
                            <h2>Guest Reviews <span>(18 reviews)</span></h2>
                        </div>

                        <button className="review-btn">Show all reviews</button>
                    </div>

                    <div className="reviews-summary">
                        <div className="rating-circle">
                            <h1>4.7</h1>
                            <span>/5</span>
                        </div>

                        <div className="rating-details">
                            <p className="recommend">94% guests recommend this hotel</p>

                            <div className="rating-bars">
                                <div className="bar-item"><span>Cleanliness</span><div className="bar"><div style={{ width: "100%" }}></div></div><span>5</span></div>
                                <div className="bar-item"><span>Value</span><div className="bar"><div style={{ width: "94%" }}></div></div><span>4.7</span></div>
                                <div className="bar-item"><span>Safety & Security</span><div className="bar"><div style={{ width: "98%" }}></div></div><span>4.9</span></div>
                                <div className="bar-item"><span>Staff Service</span><div className="bar"><div style={{ width: "98%" }}></div></div><span>4.9</span></div>
                                <div className="bar-item"><span>Amenities</span><div className="bar"><div style={{ width: "94%" }}></div></div><span>4.7</span></div>
                                <div className="bar-item"><span>Property Condition</span><div className="bar"><div style={{ width: "98%" }}></div></div><span>4.9</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-cards">
                        <div className="review-card">
                            <p className="stars">⭐⭐⭐⭐⭐ <span>5/5</span></p>
                            <h4>Newly remodeled and friendly</h4>
                            <p>Great people and hotel!</p>

                            <div className="review-footer">
                                <div>
                                    <p className="name">Chesshir, Jay</p>
                                    <p className="date">March 2026</p>
                                </div>
                                <span className="verified">Verified</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <p className="stars">⭐⭐⭐⭐⭐ <span>5/5</span></p>
                            <h4>Great Hotel</h4>
                            <p>Really nice room, super comfortable bed, spotless clean.</p>

                            <div className="review-footer">
                                <div>
                                    <p className="name">Smith, John</p>
                                    <p className="date">February 2026</p>
                                </div>
                                <span className="verified">Verified</span>
                            </div>
                        </div>

                        <div className="review-card">
                            <p className="stars">⭐⭐⭐⭐ <span>4/5</span></p>
                            <h4>Good value for money</h4>
                            <p>Clean rooms, friendly staff, good breakfast. Would stay again.</p>

                            <div className="review-footer">
                                <div>
                                    <p className="name">Johnson, Mary</p>
                                    <p className="date">January 2026</p>
                                </div>
                                <span className="verified">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================ */}
                <div className="contact-section" id="contact">
                    <p className="tag">CONTACT US</p>
                    <h2>Get in touch</h2>

                    <div className="contact-grid">
                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div>
                                <h4>Phone</h4>
                                <p>(501) 254-0074</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>Email</h4>
                                <p>info@sleepinnsearcy.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h4>Address</h4>
                                <p>1200 Truman Baker Drive<br />Searcy, AR 72143, US</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">🕐</div>
                            <div>
                                <h4>Front Desk</h4>
                                <p>24/7 Available</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Amenities Modal */}
            {showAmenitiesModal && (
                <Amenities onClose={() => setShowAmenitiesModal(false)} />
            )}
        </>
    );
}