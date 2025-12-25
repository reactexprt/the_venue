import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import slide_one from '../../resources/images/slide_one.jpg';
import slide_four from '../../resources/images/slide_four.jpg';

const Carrousel = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images for faster carousel display
    useEffect(() => {
        const imageUrls = [slide_one, slide_four];
        let loadedCount = 0;
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setImagesLoaded(true);
                }
            };
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        fade: true,
        cssEase: 'ease-out',
        pauseOnHover: false,
        arrows: false,
        waitForAnimate: false
    }

    const slides = [
        { image: slide_one, alt: 'Celebration moment 1' },
        { image: slide_four, alt: 'Celebration moment 2' }
    ];

    return ( 
        <div 
            className="carrousel_wrapper"
            style={{ 
                opacity: imagesLoaded ? 1 : 0.8,
                transition: 'opacity 0.3s ease'
            }}
        >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="carrousel_image"
                            style={{
                                backgroundImage: `url(${slide.image})`
                            }}
                            role="img"
                            aria-label={slide.alt}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
 
export default Carrousel;