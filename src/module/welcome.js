import React from 'react';
import '../style/welcome.sass'
import BrunoLink from '../component/bruno-link'
import Button from '../component/button'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Blog from './blog'
import About from './about'
import Contact from './contact'
import WechatQRCode from './wechat-qrcode'
import Notfound from './notfound'
import IndexSlider from './indexSlider'

class AppLeft extends React.Component {
  render() {
    return <div className="app-left">
      <Switch>
        <Route exact path='/brunoink' render={() => {
          return <div className="content">
            <h1 className="welcome-headline" data-aos="fade-in" data-aos-delay="0">Hi, Here is Bruno</h1>
            <p className="welcome-description" data-aos="fade-in" data-aos-delay="100">I'm an UE Designer, Web Designer and Coder. <span class="sub">Now being employed in a Chinese technology corporation, managing the system of design. Moreover, React and Sketch Plugin Development are also what I am currently involving with.</span></p>
            <div className="content-nav">
              <Link data-aos="fade-in" data-aos-delay="200" to="" type="" text="Portfolio (Coming Soon)" className="icon-right text-32 disabled" title="Coming Soon..">Portfolio (Coming Soon)</Link>
              <Link data-aos="fade-in" data-aos-delay="250" to="/brunoink/blog" type="" text="Blog" className="icon-right text-32">Blog</Link>
              <Link data-aos="fade-in" data-aos-delay="300" to="/brunoink/about-me" type="" text="About Me" className="icon-right text-32">About Me</Link>
            </div>
            <div className="social-media">
              <Button href="https://www.linkedin.com/in/bruno-dai-b6173b11a/" target="_blank" className="tertiary-light social-media linkedin"></Button>
              <Button className="tertiary-light social-media weixin"></Button>
              <Button href="mailto:brunoming1996@gmail.com" className="tertiary-light social-media envelop"></Button>
            </div>
          </div>
        }} />
        <Route path='/brunoink/blog' component={Blog} />
        <Route path='/brunoink/about-me' component={About} />
        <Route path='/brunoink/contact' component={Contact} />
        <Route path='/brunoink/wechat/' component={WechatQRCode} />
        <Route component={Notfound} />
      </Switch>
    </div>
  }
}

class AppRight extends React.Component{
  render(){
    return <div className="app-right">
          <Router>
              <Route path='*' component={IndexSlider} />
          </Router>
      </div>;
  }
}

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  state = { show: true };

  onToggle = () => this.setState({ show: !this.state.show });
  render() {
    const { show } = this.state;
    return <main>
      <AppLeft></AppLeft>
      <AppRight></AppRight>
    </main>
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
    window.scrollTo(0, 0)
  }
}

export default Welcome;
