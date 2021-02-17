import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/HomeCarousel.css'

function HomeCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        width={900} height={500} 
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1613535661/carousell/ladybug_xkc6in.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        width={900} height={500} 
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1613535972/carousell/Sanrio_11_bhtix8.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        width={900} height={500} 
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Beehive4_mmeqhg.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        width={900} height={500} 
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538889/carousell/ct4_pqqnpi.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        width={900} height={500} 
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538889/carousell/IMG_6855_f031bp.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default HomeCarousel;

