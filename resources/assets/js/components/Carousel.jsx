import React, {
    Component,
    PropTypes,
} from 'react';
import Slider from 'react-slick';

import '../../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                {this.props.img.map((img, index) => <div key={`${img}${index}`}><img src={`/images${img}`} /></div>)}
            </Slider>
        );
    }
}

Slider.propTypes = {};
Slider.defaultProps = {};

export default Carousel;
