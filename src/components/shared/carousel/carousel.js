import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const DemoCarousel = ({images,alt}) => {
    return (
        <Carousel>
            {images.map(image => {
                return (
                    <Carousel.Item> 
                            <img
                            className="w-100"
                            src={image}
                            alt={alt}
                            />
                        )
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })

            }
        </Carousel>
    )
}

export default DemoCarousel;