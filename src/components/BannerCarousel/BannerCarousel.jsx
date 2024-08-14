import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BannerCarousel.css';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'


const BannerCarousel = () => {
    const bannerImages = [
        banner1,
        banner2,
        banner3,
    ];

    return (
        <div className="banner-carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={3000}
            >
                {bannerImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerCarousel;
