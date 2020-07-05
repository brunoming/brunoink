import React from 'react';
import { Link } from "react-router-dom";
import { Button , QRCodeButton } from '../component/button.js'
import '../style/home.sass'
import Brunolink from '../component/bruno-link'

class Home extends React.Component {

  render() {
    return <div className="content">
    <h1 className="welcome-headline" data-aos="fade-up" data-aos-delay="0">Hi, Here is Bruno</h1>
    <p className="welcome-description" data-aos="fade-up" data-aos-delay="100">I'm an UE Designer, Web Designer and Coder. <span className="sub">Now being employed in a Chinese technology corporation, managing the system of design. Moreover, React and Sketch Plugin Development are also what I am currently involving with.</span></p>
    <div className="content-nav" data-aos="fade-up" data-aos-delay="200" >
    <Link to="/blog" type="" text="Blog" className="icon-right navlink">Blog</Link>
      <Link to="" type="" text="Portfolio (Coming Soon)" className="icon-right navlink disabled" title="Coming Soon..">Portfolio (Coming Soon)</Link>
      <Link to="/about-me" type="" text="About Me (Coming Soon)" className="icon-right navlink disabled">About Me (Coming Soon)</Link>
    </div>
    <div className="social-media">
      <Button href="https://www.linkedin.com/in/bruno-dai-b6173b11a/" target="_blank" className="tertiary-light social-media linkedin"></Button>
      <QRCodeButton QRCode="amazing" className="tertiary-light social-media weixin"></QRCodeButton>
      <Button href="mailto:brunoming1996@gmail.com" className="tertiary-light social-media envelop"></Button>
    </div>
  </div>
  }

}

export default Home;
