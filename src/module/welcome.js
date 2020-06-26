import React from 'react';
import '../style/welcome.sass'
import BrunoLink from '../component/bruno-link.js'
import Button from '../component/button.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <section className="index-section-hero">
      <div className="hero-left">
        <div className="content">
          <h1 data-aos="fade-up">Hi, Here is Bruno</h1>
          <p data-aos="fade-up">User Experience Designer, Web Designer and Coder. Now be employed in a Chinese technology company. Currently manage our design system. Now learning React and Sketch Plugin Development</p>
          <div className="content-nav">
            <BrunoLink delay="100" href="" type="" text="Portfolio (Coming Soon)" className="text-32 disabled" title="Coming Soon.."></BrunoLink>
            <BrunoLink delay="200" href="" type="" text="About Me" className="text-32"></BrunoLink>
            <BrunoLink delay="300" href="" type="" text="Contact" className="text-32"></BrunoLink>
          </div>
          <div className="social-media" data-aos="fade-up" data-aos-delay="400">
            <Button href="https://www.linkedin.com/in/bruno-dai-b6173b11a/" target="_blank" className="tertiary-light social-media linkedin"></Button>
            <Button href="mailto:brunoming1996@qq.com" className="tertiary-light social-media envelop"></Button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <canvas className="zdog-canvas"></canvas>
      </div>
    </section>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Welcome;
