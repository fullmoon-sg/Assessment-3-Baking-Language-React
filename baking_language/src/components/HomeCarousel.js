import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/HomeCarousel.css'

function HomeCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538889/carousell/IMG_6806_cjgayt.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Bunny_Cake_3_esjywj.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Beehive4_mmeqhg.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538889/carousell/ct4_pqqnpi.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/fullmoon/image/upload/v1612538889/carousell/IMG_6855_f031bp.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default HomeCarousel;

