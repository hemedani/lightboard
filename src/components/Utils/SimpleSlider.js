import React, { Component } from 'react';
import Slider from 'react-slick';

class SimpleSlider extends Component {
    render() {
        var settings = { infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
        return (
            <Slider {...settings} className='illigal-slide-wrapper'>
                <div className='illigal-slide-wrapper'>
                    <div className='illigal-col-2'><img src='./img/hookah.png' /></div>
                    <div className='illigal-col-3'>
                        <h4>قلیان</h4>
                        <h4>Hookah</h4>
                    </div>
                </div>
                <div className='illigal-slide-wrapper'>
                    <div className='illigal-col-2'><img src='./img/hookah.png' /></div>
                    <div className='illigal-col-3'>
                        <h4>قلیان</h4>
                        <h4>Hookah</h4>
                    </div>
                </div>
                <div className='illigal-slide-wrapper'>
                    <div className='illigal-col-2'><img src='./img/hookah.png' /></div>
                    <div className='illigal-col-3'>
                        <h4>قلیان</h4>
                        <h4>Hookah</h4>
                    </div>
                </div>
                <div className='illigal-slide-wrapper'>
                    <div className='illigal-col-2'><img src='./img/hookah.png' /></div>
                    <div className='illigal-col-3'>
                        <h4>قلیان</h4>
                        <h4>Hookah</h4>
                    </div>
                </div>
            </Slider>
        );
    }
}

  export default SimpleSlider;