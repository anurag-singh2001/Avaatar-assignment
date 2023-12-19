// Carousel.js

import React, { useEffect, useState,useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './style.css';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, [length, setCurrent]);


    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [current, length, nextSlide]);

    if (!Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    return (
        <section className="flex flex-col justify-center items-center w-full mt-20">
            <div className="carousel">
                <div className="carousel-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-card ${index === current ? "opacity-100 scale-108" : "opacity-30"
                                }`}
                            style={{ transform: `translateX(${100 * (index - current)}%)` }}
                        >
                            <div className="carousel-image-container">
                                <img
                                    src={slide.img}
                                    alt={`Slide ${index + 1}`}
                                    className="carousel-img"
                                    onClick={() => setCurrent(index)}
                                />
                                <div className="carousel-text">{slide.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation arrows and indicators */}
            <div className="carousel-navigation">
                <FaArrowLeft
                    className="carousel-arrow"
                    onClick={prevSlide}
                    size={20}
                />
                {Array.from({ length: slides.length }).map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${current === index ? "active" : ""
                            }`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
                <FaArrowRight
                    className="carousel-arrow"
                    onClick={nextSlide}
                    size={20}
                />
            </div>
        </section>
    );
};

export default Carousel;
