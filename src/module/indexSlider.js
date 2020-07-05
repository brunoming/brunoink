import React from 'react';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "../style/indexSlider.sass";

class SlideItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            slideNumber: this.props.slideNumber,
            description: this.props.description
        }
    }

    render(){
        return <div className={"swiper-slide slide-" + this.state.slideNumber}>
            <span className="description">{this.state.description}</span>
        </div>
    }

}

class IndexSlider extends React.Component {

    constructor(){
        super()
    }

    render() {
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                <SlideItem slideNumber="1" description="Picture here in 2018, Kamakura, Japan"></SlideItem>
                <SlideItem slideNumber="2" description="Picture here in 2019, Pulau Langkawi, Malaysia"></SlideItem>
                <SlideItem slideNumber="3" description="Picture here in 2019, Pulau Langkawi, Malaysia"></SlideItem>
                <SlideItem slideNumber="4" description="Picture here in 2020, Guangdong, China"></SlideItem>
                <SlideItem slideNumber="5" description="Picture here in 2018, Pokhara, Nepal"></SlideItem>
            </div>
        </div>;
    }

    componentDidMount() {
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
