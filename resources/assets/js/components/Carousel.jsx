import React, { PropTypes } from 'react';
import Slider from 'react-slick';

import '../../../../node_modules/slick-carousel/slick/slick.css';

const Carousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        delay: 1000,
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {props.img.map((img, index) => <div key={`${img}${index}`}>
                <img src={`/images${img}`} role="presentation" /></div>)}
        </Slider>
    );
};

Slider.propTypes = {
    img: PropTypes.string,
};
Slider.defaultProps = {};

export default Carousel;
