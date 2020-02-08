import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const MultiCarousel = (props) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
           <Carousel responsive={responsive}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {(props.data && props.data.length > 0) ?
                    props.data.map((val, idx) => {
                        return (
                            <div key={idx} data-testid="popular-places">
                                <Card  >
                                    <div className='backgroundImg' style={{ backgroundImage:"url(" + val.img +")" }}></div>
                                    <CardBody>
                                        <CardTitle>{val.title}</CardTitle>
                                        <CardSubtitle> <i className="fa fa-map-marker"></i> {val.location}</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    }) : <p>Sorry, we couldn't find any popular places that matched your search criteria </p>
                }
            </Carousel>
        </>
    )
}

export default MultiCarousel;