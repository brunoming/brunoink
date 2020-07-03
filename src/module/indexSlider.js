import React from 'react';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "../style/indexSlider.sass";

class IndexSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide slide-1">
                </div>
                <div className="swiper-slide slide-2">
                </div>
                <div className="swiper-slide slide-3">
                </div>
            </div>
        </div>;
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
        var swiper = new Swiper('.swiper-container', {
            fadeEffect: {
              crossFade: true
            },
            autoplay: {
              delay: 8000,
            },
            effect: 'fade',
            speed: 1000,
            loop: true,
            // ...
          });
          swiper.width = window.innerWidth * 0.667
    }
}

export default IndexSlider;
