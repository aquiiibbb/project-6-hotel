import React, { useState } from 'react';
import './room3.css';

const Room3 = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ];

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="room3-modal-overlay" onClick={onClose}>
            <div className="room3-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="room3-close-btn" onClick={onClose}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="room3-header">
                    <h2>1 King Bed Suite, Nonsmoking</h2>
                    <div className="room3-specs">
                        <span>🛏️ 1 King Bed</span>
                        <span>👥 No Smoking</span>
                        <span>📐 350 sq ft</span>
                    </div>
                </div>

                {/* Content */}
                <div className="room3-content">
                    {/* Image Gallery */}
                    <div className="room3-image-section">
                        <div className="room3-main-image">
                            <img src={images[currentImageIndex]} alt="1 King Bed Suite" />
                            <button className="room3-nav-btn room3-prev" onClick={prevImage}>‹</button>
                            <button className="room3-nav-btn room3-next" onClick={nextImage}>›</button>
                            <div className="room3-image-counter">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </div>

                        <div className="room3-thumbnails">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Room view ${index + 1}`}
                                    className={currentImageIndex === index ? 'active' : ''}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Room Info */}
                    <div className="room3-info-section">
                        <div className="room3-room-overview">
                            <h3>Suite Overview</h3>
                            <p>Experience luxury in our spacious king bed suite featuring a separate living area with sofa bed. Perfect for families or extended stays with modern amenities and a relaxing atmosphere.</p>
                        </div>

                        {/* Room Features */}
                        <div className="room3-features">
                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01l-2.54 7.63A1.5 1.5 0 0 0 12.86 18H16v4h4z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>4 Guests Maximum</span>
                                </div>
                            </div>

                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>100% Non-Smoking</span>
                                </div>
                            </div>

                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v12z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>350 sq ft</span>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="room3-amenities">
                            <h4>Suite Amenities</h4>

                            <div className="room3-amenities-category">
                                <h5>🛏️ Bedroom</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>1 King Bed</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Sofa Bed</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Premium Bedding</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Blackout Curtains</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>📺 Entertainment</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>55-Inch TV with Soundbar</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Cable/Satellite Channels</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Wireless Streaming Service</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Free WiFi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🍽️ Kitchen & Dining</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Microwave</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Mini Refrigerator</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Coffee Maker</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Complimentary Coffee</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🚿 Bathroom</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Private Bathroom</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Shower/Tub Combination</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Hair Dryer</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Complimentary Toiletries</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>💼 Work Space</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Desk with Electrical Outlet</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Ergonomic Chair</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>High-Speed Internet</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Phone with Voicemail</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🛡️ Additional Services</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Iron and Ironing Board</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Electronic Door Locks</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Daily Housekeeping</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>24/7 Front Desk</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accessibility */}
                        <div className="room3-accessibility">
                            <h4>♿ Accessibility Features</h4>
                            <div className="room3-accessibility-list">
                                <div className="room3-accessibility-item">
                                    <span>• Accessible bathroom with grab bars</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Roll-in shower available upon request</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Lowered closet rods and shelves</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Visual notification devices</span>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="room3-pricing">
                            <div className="room3-price-info">
                                <div className="room3-price-display">
                                    <span className="room3-price-label">Starting from</span>
                                    <div className="room3-price-main">
                                        <span className="room3-original-price">$125</span>
                                        <span className="room3-current-price">$112</span>
                                    </div>
                                    <span className="room3-price-period">USD per night</span>
                                </div>
                                <div className="room3-price-details">
                                    <p className="room3-member-rate">✨ Member Rate - Save 10%</p>
                                    <p className="room3-price-note">*Excludes taxes and fees</p>
                                </div>
                            </div>
                            <button className="room3-book-btn">View Rates & Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room3;